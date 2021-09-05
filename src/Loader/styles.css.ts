import { style, keyframes } from '@vanilla-extract/css'

export const loaderLayout = style({
  height: 'calc(100vh - 110px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)', transformOrigin: 'center' },
  '100%': { transform: 'rotate(360deg)', transformOrigin: 'center' },
})

export const animated = style({
  animation: `1s infinite ${rotate}`,
  height: '24px',
  width: '24px',
})
