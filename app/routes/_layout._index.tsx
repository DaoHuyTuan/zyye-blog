import { json } from '@remix-run/node'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { BlogItem } from '~/components/BlogItem'
import { Loading } from '~/components/Loading'
import { ClientOnly } from '~/components/ClientOnly'
import { getPosts } from '~/utils/posts.server'

interface Post {
  title: string
  slug: string
  tags: string[]
}

export const loader = async () => {
  const posts = await getPosts()
  return json({ posts })
}

export default function Index() {
  const { posts } = useLoaderData<{ posts: Post[] }>()

  return (
    <ClientOnly
      fallback={
        <div className="flex flex-col pt-[10px] gap-[20px] px-[20px]">
          {posts.map(post => (
            <div
              key={post.slug}
              className="cursor-pointer">
              <div className="text-[#2b2b2b] relative text-[14px] after:bg-[#2b2b2b] after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-[-3px]">
                {post.title}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[12px] text-[white] bg-[#2b2b2b] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      }>
      <IndexContent posts={posts} />
    </ClientOnly>
  )
}

function IndexContent({ posts }: { posts: Post[] }) {
  const navigation = useNavigation()
  const isLoading =
    navigation.state === 'loading' || navigation.state === 'submitting'

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col pt-[10px] gap-[20px] px-[20px]">
      {posts.map(post => (
        <BlogItem
          title={post.title}
          slug={post.slug}
          category="posts"
          tags={post.tags}
          key={post.slug}
        />
      ))}
    </div>
  )
}
