import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const docsDirectory = path.join(process.cwd(), 'docs')

export function getAllDocIds() {
  const fileNames = fs.readdirSync(docsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getDocData(id) {
  return readMd(`${id}.md`)
}

export async function readMd(filename) {
  const fullPath = path.join(docsDirectory, filename)
  const source = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(source)
  const mdxSource = await serialize(source)

  return {
    mdxSource,
    ...matterResult.data
  }
}
