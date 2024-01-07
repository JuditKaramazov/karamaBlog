import { createFetcherStore } from './fetcher'

export type Location = {
  country: string
  city: string
  country_code: string
  date_start: string
  date_end: string
}

export type LocationStore =
  | {
      now: Location
      next: Location
      previous: Location
    }
  | undefined

const url =
  'https://raw.githubusercontent.com/VKaramazov/karaLocation/main/location.json'

export const $location = createFetcherStore<LocationStore>([url], {
  refetchOnReconnect: true,
  refetchOnFocus: true
})
