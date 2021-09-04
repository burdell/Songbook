import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  typography: {
    color: 'hsl(234, 0%, 30%)',
    lighterColor: 'hsl(234, 0%, 35%)',
    fontSize: '15px',
    serif: 'Spectral, Arial, serif',
    sansSerif: 'Poppins, Helvetica, sans-serif',
  },
  colors: {
    border: 'hsl(234, 0%, 90%);',
    lightBackground: 'hsl(234, 71%, 95%)',
  },
})

export const appStyle = style({
  fontFamily: vars.typography.serif,
  color: vars.typography.color,
  padding: 10,
})
