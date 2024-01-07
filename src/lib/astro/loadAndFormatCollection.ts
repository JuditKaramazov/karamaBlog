import { getCollection, type CollectionEntry } from 'astro:content'
import { readOutExif } from '@lib/exif'
import path from 'path'
import config from '@config/blog.config'
import { sortPosts } from './sortPosts'
import { getSlug } from './getSlug'

export async function loadAndFormatCollection(
  name: 'articles' | 'links' | 'photos'
): Promise<CollectionEntry<'articles' | 'links' | 'photos'>[]> {
  let postsCollection = await getCollection(name)

  if (import.meta.env.PROD) {
    postsCollection = postsCollection.filter(({ data }) => data.draft !== true)
  }

  for await (const post of postsCollection) {
    const date = post.data.date
      ? post.data.date
      : new Date(post.id.split('/')[0].substring(0, 10))

    const slug = getSlug(`${post.collection}/${post.id}`)

    const githubLink = `${config.repoContentPath}/${post.collection}/${post.id}`

    post.slug = slug as CollectionEntry<'articles' | 'links' | 'photos'>['slug']
    post.data.date = date
    post.data.githubLink = githubLink

    //
    // Extracts exif & iptc data from photos.
    //
    if (post.collection === 'photos') {
      const isProd = import.meta.env.PROD

      const imagePath = isProd
        ? path.join(
            'content',
            'photos',
            post.id.split('/')[0],
            post.data.image.src.split('/')[2].split('.')[0].concat('.jpg')
          )
        : post.data.image.src.split('?')[0].split('/@fs')[1]
      const exif = await readOutExif(imagePath)
      post.data.exif = exif
    }
  }

  const posts = sortPosts(postsCollection)
  return posts
}
