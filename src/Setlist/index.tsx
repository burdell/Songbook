import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

import { useSetlist, Song } from '../data'

import { setlistStyle, songStyle, songTitle } from './styles.css.js'
import { SetlistProvider, useSetlistControls } from './useSetlistControls'
import { ChevronLeft, ChevronRight } from './Chevron'
import { Loader } from '../Loader'

function SetlistDisplay() {
  const { songs } = useSetlistControls()

  if (!songs) return null

  return (
    <div>
      {songs.map((song) => (
        <div>
          <h2 className={songTitle}>{song.title}</h2>
          <div className={songStyle}>
            <BlockContent blocks={song.lyrics} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function Setlist() {
  const { data, status } = useSetlist()
  const isLoading = status === 'loading'

  return (
    <SetlistProvider setlist={data}>
      <div className={setlistStyle}>
        <>{data && !isLoading ? <SetlistDisplay /> : null}</>
        <>{isLoading ? <Loader /> : null}</>
      </div>
    </SetlistProvider>
  )
}
