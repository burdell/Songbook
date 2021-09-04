import { style } from '@vanilla-extract/css'

import { vars } from '../App.css.js'

export const headerPosition = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  borderBottom: `1px solid ${vars.colors.border}`,
  backgroundColor: 'white',
})

export const headerStyle = style({
  padding: '15px',
  fontSize: '1.2rem',
  fontFamily: vars.typography.sansSerif,
  display: 'flex',
  justifyContent: 'space-between',
})
