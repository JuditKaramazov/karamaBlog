import type { ReactElement } from 'react'
import { RandomEmoji } from './RandomEmoji'

type LocationProps = {
  country: string
  countryCode: string
  city: string
  time: string
  showEmoji?: boolean
}

export function LocationItem({
  country,
  countryCode,
  city,
  time,
  showEmoji = true
}: LocationProps): ReactElement<LocationProps> {
  return (
    <>
      {showEmoji && (
        <RandomEmoji
          country={{
            code: countryCode,
            name: country
          }}
        />
      )}
      {city} <span>{time}</span>
    </>
  )
}
