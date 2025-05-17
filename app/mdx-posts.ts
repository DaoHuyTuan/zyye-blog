import { glob } from 'glob'

// Generate a map of slugs to MDX components
export async function getPosts() {
  const files = await glob('app/posts/*.mdx')
  const posts = await Promise.all(
    files.map(async file => {
      const slug = file.split('/').pop()?.replace('.mdx', '')
      const { meta, default: Component } = await import(`./posts/${slug}.mdx`)
      return { slug, meta, Component }
    })
  )
  return Object.fromEntries(posts.map(post => [post.slug, post]))
}
