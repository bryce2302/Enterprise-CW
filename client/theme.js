import { createTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#5c67a3',
      main: '#B2AC88',
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
      openTitle: '#B2AC88',
      protectedTitle: pink['400'],
      type: 'light'
    }
  });

  export default theme
