import { z, type ImageFunction } from 'astro:content'

const schemaShared = {
  title: z.string(),
  date: z
    .string()
    .or(z.date())
    .optional()
    .transform((val: string | Date | undefined) =>
      val ? new Date(val) : undefined
    ),
  updated: z
    .string()
    .or(z.date())
    .optional()
    .transform((val: string | Date | undefined) =>
      val ? new Date(val) : undefined
    ),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  redirect_from: z.array(z.string()).optional(),
  author: z.string().optional(),
  featured: z.boolean().optional(),
  style: z.string().optional(),
  toc: z.boolean().optional(),
  githubLink: z.string().optional(),
  changelog: z.string().optional(),
  lead: z.string().optional()
}

export const schemaArticles = (image: ImageFunction) =>
  z
    .object({
      ...schemaShared,
      image: image().optional(),
      download: z.string().optional(),
      changelog: z.string().optional()
    })
    .strict()

export const schemaLinks = z
  .object({
    ...schemaShared,
    linkurl: z.string()
  })
  .strict()

export const schemaPhotos = (image: ImageFunction) =>
  z
    .object({
      ...schemaShared,
      image: image(),
      exif: z.object({}).optional()
    })
    .strict()
