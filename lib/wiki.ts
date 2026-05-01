import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface WikiEntry {
  slug: string
  title: string
  order: number
  description: string
  keywords: string[]
  related: string[]
  content: string
  filePath: string
}

const WIKI_DIR = path.join(process.cwd(), 'content/wiki')

export async function getAllWikiEntries(): Promise<WikiEntry[]> {
  const files = fs.readdirSync(WIKI_DIR)
  
  const entries = files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(WIKI_DIR, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: data.slug,
        title: data.title,
        order: data.order || 0,
        description: data.description,
        keywords: data.keywords || [],
        related: data.related || [],
        content,
        filePath: file,
      } as WikiEntry
    })
    .sort((a, b) => a.order - b.order)
  
  return entries
}

export async function getWikiEntryBySlug(slug: string): Promise<WikiEntry | null> {
  const entries = await getAllWikiEntries()
  return entries.find(entry => entry.slug === slug) || null
}

export async function getRelatedEntries(relatedTitles: string[]): Promise<WikiEntry[]> {
  const entries = await getAllWikiEntries()
  return entries.filter(entry => relatedTitles.includes(entry.title))
}
