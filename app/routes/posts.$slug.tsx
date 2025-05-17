import { json, LoaderFunction } from '@remix-run/node'
import { getMDXComponent } from 'mdx-bundler/client'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { getPost } from '~/utils/posts.server'
import { MDXProvider } from '@mdx-js/react'
import * as mdxComponents from '~/components/mdx-components'

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug
  if (!slug) {
    throw new Response('Slug not provided', { status: 400 })
  }

  const post = await getPost(slug)
  if (!post) {
    throw new Response('Post not found', { status: 404 })
  }

  return json({ post })
}

export default function Post() {
  const { post } = useLoaderData<typeof loader>()

  let Component
  try {
    Component = getMDXComponent(post.code)
  } catch (error) {
    console.error('Failed to create MDX component:', error)
    return (
      <article>
        <h1>{post.title}</h1>
        <p>Error: Unable to render post content.</p>
      </article>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {Component ? <Component /> : <p>No content available.</p>}
    </article>
  )
}

export function ErrorBoundary() {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong while loading the post.</p>
    </div>
  )
}
