import { useQuery } from 'react-query'
import ky from 'ky'
import type { BlockContentProps } from '@sanity/block-content-to-react'

async function fetchSanityData<DocumentType>(query: string) {
  const sanityResult = await ky
    .get(
      `https://zw649fyt.api.sanity.io/v2021-06-07/data/query/production?query=${encodeURIComponent(
        query,
      )}`,
    )
    .json()

  return sanityResult as { result: DocumentType }
}

export interface Setlist {
  songList: Song[]
}

export interface Song {
  title: string
  url: string
  lyrics: BlockContentProps
}

export function useSetlist() {
  const { status, data } = useQuery(
    'currentSetlist',
    async () =>
      await fetchSanityData<Setlist>(`
      *[_id == "setlist"][0] {
        "songList": songList[]->{title, lyrics, "url": url.current}
      }
    `),
  )

  return { data: data?.result, status }
}
