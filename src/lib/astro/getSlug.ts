import path from 'node:path'

export function getSlug(filePath: string): string {
  const parsedPath = path.parse(filePath)
  let slug

  if (parsedPath.base === 'index.md') {
    slug = parsedPath.dir
  } else {
    slug = `${parsedPath.dir}/${parsedPath.name}`
  }

  slug = slug.split('/')[1]

  slug = slug.substring(11)

  return slug
}
