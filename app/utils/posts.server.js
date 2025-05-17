import * as fs from 'fs/promises'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'app/posts')

export async function getPosts() {
  debugger
  const files = await fs.readdir(postsDirectory)
  console.log('files', files)
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async file => {
        const filePath = path.join(postsDirectory, file)
        const source = await fs.readFile(filePath, 'utf8')
        const { data } = matter(source)
        debugger
        return {
          slug: file.replace(/\.mdx$/, ''),
          title: data.title,
          excerpt: data.excerpt || ''
        }
      })
  )
  debugger
  return posts
}

export const getPost = async slug => {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)

  try {
    await fs.access(filePath)
    const source = await fs.readFile(filePath, 'utf-8')
    const { code, frontmatter } = await bundleMDX({ source })

    return {
      slug,
      title: frontmatter.title || 'Untitled',
      code
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null
    }
    throw error
  }
}
