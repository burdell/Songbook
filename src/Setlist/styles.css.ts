import { style } from '@vanilla-extract/css'

import { vars } from '../App.css.js'

export const setlistStyle = style({
  marginTop: '120px',
})

export const songStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1.2rem',
})

export const songHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${vars.colors.border}`,
  fontSize: '0.8rem',
  textAlign: 'center',
  position: 'fixed',
  left: 0,
  top: '60px',
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'white',
})

export const rightPager = style({
  marginRight: '15px',
})

export const leftPager = style({
  marginLeft: '15px',
})

export const songPager = style({
  fontFamily: vars.typography.sansSerif,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: vars.colors.lightBackground,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '5px',
  padding: '0.4rem 1.5rem',
  color: vars.typography.lighterColor,
  cursor: 'pointer',
})

export const disabledPager = style({
  opacity: 0.3,
})
