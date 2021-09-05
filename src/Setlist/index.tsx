import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

import { useSetlist, Song } from '../data'

import {
  setlistStyle,
  songStyle,
  songHeader,
  songPager,
  disabledPager,
  rightPager,
  leftPager,
} from './styles.css.js'
import { SetlistProvider, useSetlistControls } from './useSetlistControls'
import { ChevronLeft, ChevronRight } from './Chevron'
import { Loader } from '../Loader'

function SetlistDisplay() {
  const {
    currentSong,
    nextSong,
    previousSong,
    hasNext,
    hasPrevious,
  } = useSetlistControls()

  if (!currentSong) return null

  return (
    <div>
      <div className={songHeader}>
        <div className={leftPager}>
          <button
            onClick={previousSong}
            className={`${songPager} ${!hasPrevious ? disabledPager : ''}`}
            disabled={!hasPrevious}
          >
            <ChevronLeft />
          </button>
        </div>
        <h2>{currentSong.title}</h2>
        <div className={rightPager}>
          <button
            onClick={nextSong}
            className={`${songPager} ${!hasNext ? disabledPager : ''}`}
            disabled={!hasNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className={songStyle}>
        <BlockContent blocks={currentSong.lyrics} />
      </div>
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
