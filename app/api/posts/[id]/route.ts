import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import Post from "@/models/post"
import { getSession } from "@/lib/auth"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Connect to database
    await connectToDatabase()

    // Find post by ID
    const post = await Post.findById(id).populate("author", "name")

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error("Get post error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const { title, content } = await request.json()

    // Validate input
    if (!title || !content) {
      return NextResponse.json({ message: "Title and content are required" }, { status: 400 })
    }

    // Connect to database
    await connectToDatabase()

    // Find post by ID
    const post = await Post.findById(id)

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 })
    }

    // Check if user is the author of the post
    if (post.author.toString() !== session.userId) {
      return NextResponse.json({ message: "Not authorized to update this post" }, { status: 403 })
    }

    // Update post
    post.title = title
    post.content = content
    await post.save()

    return NextResponse.json({ message: "Post updated successfully", post })
  } catch (error) {
    console.error("Update post error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    // Connect to database
    await connectToDatabase()

    // Find post by ID
    const post = await Post.findById(id)

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 })
    }

    // Check if user is the author of the post
    if (post.author.toString() !== session.userId) {
      return NextResponse.json({ message: "Not authorized to delete this post" }, { status: 403 })
    }

    // Delete post
    await Post.findByIdAndDelete(id)

    return NextResponse.json({ message: "Post deleted successfully" })
  } catch (error) {
    console.error("Delete post error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

