import * as fs from 'fs/promises'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import matter from 'gray-matter'

const momentsDirectory = path.join(process.cwd(), 'app/moments')

export async function getMoments() {
  try {
    const files = await fs.readdir(momentsDirectory)
    const moments = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => {
          const filePath = path.join(momentsDirectory, file)
          const source = await fs.readFile(filePath, 'utf8')
          const { data } = matter(source)
          return {
            id: file.replace(/\.mdx$/, ''),
            title: data.title,
            description: data.description || '',
            image: data.image || '/default-moment.jpg',
            category: data.category || 'life',
            date: data.date,
            tags: data.tags || []
          }
        })
    )
    // Sort by date descending (newest first)
    return moments.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error reading moments directory:', error)
    return []
  }
}

export const getMoment = async slug => {
  const filePath = path.join(momentsDirectory, `${slug}.mdx`)

  try {
    await fs.access(filePath)
    const source = await fs.readFile(filePath, 'utf-8')
    const { code, frontmatter } = await bundleMDX({ source })

    return {
      slug,
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      image: frontmatter.image || '/default-moment.jpg',
      category: frontmatter.category || 'life',
      date: frontmatter.date,
      tags: frontmatter.tags || [],
      code
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null
    }
    throw error
  }
} 