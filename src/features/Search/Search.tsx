import { type ReactElement, useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { useStore } from '@nanostores/react'
import { isSearchOpen } from '@stores/search'
import SearchResults from './Results'
import styles from './Search.module.css'
import type { CollectionEntry } from 'astro:content'
import Input from '@components/Input'

export type Post = CollectionEntry<'articles' | 'links' | 'photos'>

// Configures fuse.js.
// https://fusejs.io/api/options.html
const fuseOptions = {
  keys: ['data.title', 'data.lead', 'slug'],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5
}

export default function Search(): ReactElement {
  const $isSearchOpen = useStore(isSearchOpen)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Post[]>()
  const [allPosts, setAllPosts] = useState<Post[]>()

  // Fetches all post data on open.
  useEffect(() => {
    if (!$isSearchOpen) return

    fetch('/api/posts')
      .then((res) => res.json())
      .then((json) => setAllPosts(json))
  }, [$isSearchOpen])

  // Handles search and sets results.
  const fuse = allPosts ? new Fuse(allPosts, fuseOptions) : null

  useEffect(() => {
    if (!query || query === '' || !fuse) {
      setResults([])
      return
    }

    const results = fuse
      .search(query)
      .map((result) => result.item)
      .slice(0, 6)

    setResults(results)
  }, [query])

  // Animates closing (search).
  async function toggleSearch(): Promise<void> {
    isSearchOpen.set(!$isSearchOpen)
  }

  return $isSearchOpen ? (
    <>
      <form className={styles.search}>
        <Input
          className={styles.searchInput}
          type="search"
          placeholder="Search for literally everything you think of"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          className={styles.searchInputClose}
          onClick={toggleSearch}
          title="Close search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </form>

      <SearchResults query={query} results={results} />
    </>
  ) : (
    <></>
  )
}
