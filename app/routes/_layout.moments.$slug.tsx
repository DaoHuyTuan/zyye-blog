import { json, LoaderFunction } from '@remix-run/node'
import { getMDXComponent } from 'mdx-bundler/client'
import { useLoaderData } from '@remix-run/react'
import { MDXProvider } from '@mdx-js/react'
import * as mdxComponents from '~/components/mdx-components'
import { getMoment } from '~/utils/moments.server'
import { useMemo } from 'react'

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug
  if (!slug) {
    throw new Response('Slug not provided', { status: 400 })
  }

  const post = await getMoment(slug)
  if (!post) {
    throw new Response('Post not found', { status: 404 })
  }

  return json({ post })
}

export default function Post() {
  const { post } = useLoaderData<typeof loader>()

  const Component = useMemo(() => {
    try {
      return getMDXComponent(post.code)
    } catch (error) {
      console.error('Failed to create MDX component:', error)
      return null
    }
  }, [post.code])

  if (!Component) {
    return (
      <article className="px-[20px] py-[20px]">
        <h1 className="text-[24px] font-bold mb-[20px]">{post.title}</h1>
        <span>Error: Unable to render post content.</span>
      </article>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed">
            <Component />
          </div>
        </div>
      </MDXProvider>
    </article>
  )
}

export function ErrorBoundary() {
  return (
    <div className="px-[20px] py-[20px]">
      <h1 className="text-[24px] font-bold mb-[20px]">Error</h1>
      <span>Something went wrong while loading the post.</span>
    </div>
  )
}
