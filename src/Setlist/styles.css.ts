import { style } from '@vanilla-extract/css'

import { vars } from '../App.css.js'

export const setlistStyle = style({
  marginTop: '70px',
})

export const songStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1rem',
  lineHeight: 1.4,
})

export const songHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${vars.colors.border}`,
  fontSize: '0.7rem',
  textAlign: 'center',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'white',
  fontFamily: vars.typography.sansSerif,
  overflowY: 'scroll',
  height: '80px',
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
  height: '100%',
  padding: '0.8rem',
  color: vars.typography.lighterColor,
  cursor: 'pointer',
  borderRadius: '50%',
})

export const disabledPager = style({
  opacity: 0.3,
})
