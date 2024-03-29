//
// Adapted from: https://github.com/remarkjs/remark-toc
//
import { toc } from 'mdast-util-toc'
import { toHast } from 'mdast-util-to-hast'
import { toHtml } from 'hast-util-to-html'
import { type VFile } from 'vfile'
import { type Transformer } from 'unified'
import type { Nodes } from 'node_modules/mdast-util-toc/lib'

export interface MyFile extends VFile {
  data: {
    astro: {
      frontmatter: {
        tableOfContents: string
      }
    }
  }
}

export function remarkToc(): Transformer {
  return (tree, file) => {
    if (!file.history[0]?.includes('articles')) return

    const result = toc(tree as Nodes, { maxDepth: 3 })

    if (
      result.endIndex === null ||
      result.index === null ||
      result.index === -1 ||
      !result.map
    ) {
      return
    }

    const hast = toHast(result.map)
    const html = toHtml(hast)

    ;(file.data as MyFile['data']).astro.frontmatter.tableOfContents =
      html.toString()
  }
}
