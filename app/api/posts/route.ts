import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import Post from "@/models/post"
import { getSession } from "@/lib/auth"

export async function GET() {
  try {
    // Connect to database
    await connectToDatabase()

    // Get all posts with author information
    const posts = await Post.find().populate("author", "name").sort({ createdAt: -1 })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Get posts error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { title, content } = await request.json()

    // Validate input
    if (!title || !content) {
      return NextResponse.json({ message: "Title and content are required" }, { status: 400 })
    }

    // Connect to database
    await connectToDatabase()

    // Create new post
    const post = new Post({
      title,
      content,
      author: session.userId,
    })

    await post.save()

    return NextResponse.json({ message: "Post created successfully", post }, { status: 201 })
  } catch (error) {
    console.error("Create post error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

