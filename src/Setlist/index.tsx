import React, { useState } from 'react'
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
import { Header } from '../Header'
import { SetlistProvider, useSetlistControls } from './useSetlistControls'
import { ChevronLeft, ChevronRight } from './Chevron'

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

  return (
    <SetlistProvider setlist={data}>
      {/* <Header /> */}
      <div className={setlistStyle}>{data ? <SetlistDisplay /> : null}</div>
    </SetlistProvider>
  )
}
