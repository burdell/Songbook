import React, { createContext, ReactNode, useState, useContext } from 'react'

import type { Setlist, Song } from '../data'

const SetlistContext = createContext<Setlist | undefined>(undefined)

export function SetlistProvider({
  setlist,
  children,
}: {
  setlist: Setlist | undefined
  children: ReactNode
}) {
  return (
    <SetlistContext.Provider value={setlist}>
      {children}
    </SetlistContext.Provider>
  )
}

export function useSetlistControls() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const setlist = useContext(SetlistContext)
  const songs = setlist?.songList || []

  const currentSong = songs[currentIndex] as Song | undefined
  const hasNext = currentSong && currentIndex < songs.length - 1
  const hasPrevious = currentSong && currentIndex > 0

  return {
    songs,
  }
}
