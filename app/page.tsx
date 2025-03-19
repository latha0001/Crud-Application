import Link from "next/link"
import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import PostList from "@/components/post-list"

export default async function Home() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Link href="/posts/new" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
          Create New Post
        </Link>
      </div>
      <PostList />
    </main>
  )
}

