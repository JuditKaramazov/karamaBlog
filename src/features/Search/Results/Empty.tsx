import { type ReactElement } from 'react'
import styles from './Empty.module.css'
import type { Post } from '../Search'

const SearchResultsEmpty = ({
  query,
  results
}: {
  query: string
  results: Post[] | undefined
}): ReactElement => (
  <div className={styles.empty}>
    <header className={styles.emptyMessage}>
      <p className={styles.emptyMessageText}>
        {query.length > 0 && results?.length === 0
          ? 'Oops. No results found'
          : 'Peacefully awaiting your input, fellow wanderer'}
      </p>
    </header>
  </div>
)

export default SearchResultsEmpty
