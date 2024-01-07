import styles from './Loader.module.css'
import { Icon as LoaderIcon } from '@images/components/react/Loader'

export function Loader() {
  //@ts-expect-error-next-line
  return <LoaderIcon className={styles.loader} />
}
