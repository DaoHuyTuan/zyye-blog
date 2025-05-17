import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getPosts } from '~/utils/posts.server'

export const loader = async () => {
  const posts = await getPosts()
  console.log('posts', posts)
  return json({ posts })
}

export default function Index() {
  const { posts } = useLoaderData()
  console.log('posts', posts)
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Blog Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div
            key={post.slug}
            className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              <Link
                to={`/posts/${post.slug}`}
                className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
