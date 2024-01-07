import type { CollectionEntry } from 'astro:content'
import { markdownToHtml } from '../markdown'

export async function getFeedContent(
  post: CollectionEntry<'articles' | 'photos' | 'links'>
): Promise<string> {
  const footer =
    '<hr />This post was published on <a href="https://karamaBlog.vercel.app">karamaBlog.vercel.app</a>'
  const content = await markdownToHtml(post.body)

  return (post.data as any).image
    ? `<img src="${(post.data as any).image.src}" /><br />${content}${footer}`
    : `${content}${footer}`
}
