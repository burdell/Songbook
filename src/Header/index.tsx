import React, { useState } from 'react'

import { headerPosition, headerStyle } from './styles.css.js'

export function Header() {
  const [songMenuShown, setSongMenuShown] = useState(false)
  return (
    <div className={headerPosition}>
      <div className={headerStyle}>
        <div>Sunday Worship Night</div>
        <div></div>
      </div>
    </div>
  )
}
