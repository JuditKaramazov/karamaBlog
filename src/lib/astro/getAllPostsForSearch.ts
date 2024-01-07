import { type CollectionEntry } from 'astro:content'
import { getAllPosts } from './getAllPosts'

export async function getAllPostsForSearch() {
  const allPosts = await getAllPosts()
  if (!allPosts) return []

  const cleaned = await Promise.all(
    allPosts.map(async (post) => {
      const imageSrc = (
        post.data as CollectionEntry<'articles' | 'photos'>['data']
      ).image

      return {
        slug: post.slug,
        collection: post.collection,
        data: {
          title: post.data.title,
          tags: post.data.tags,
          lead: post.body.substring(0, 200),
          image: imageSrc
        }
      }
    })
  )

  return cleaned
}
