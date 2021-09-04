import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { themeClass, appStyle } from './App.css.js'
import { Setlist } from './Setlist'

const queryClient = new QueryClient()

export function App() {
  return (
    <div className={`${themeClass} ${appStyle}`}>
      <QueryClientProvider client={queryClient}>
        <Setlist />
      </QueryClientProvider>
    </div>
  )
}
