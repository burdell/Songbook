import React from 'react'

import { themeClass, exampleStyle } from './App.css.js'

interface AppProps {}

export function App({}: AppProps) {
  return (
    <div className={`${themeClass}`}>
      <div className={`${exampleStyle}`}>hello</div>
    </div>
  )
}
