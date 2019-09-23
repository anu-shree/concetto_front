import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      border: '#d4d5d9',
      text: '#686b78',
      bg: '#f1f3f6',
      contrastText: '#828288',
    },
    secondary: {
      verylight: '#adacd1',
      light: '#6c6b99',
      main: '#525188',
      dark: '#39385f',
      contrastText: '#fff',
    },
    complementry: {
      light: '#ffff51',
      main: '#f8cd01',
      dark: '#c09d00',
      contrastText: '#000',
    },
    error: {
      main: '#c4001d',
    },
    success: {
      main: '#00600f',
    },
    ecomPrimary: {
      verylight: '#adacd1',
      light: '#6c6b99',
      main: '#fff',
      dark: '#39385f',
      contrastText: '#000',
    },
    ecomSecondary: {
      light: '#ffff51',
      main: '#f8cd01',
      dark: '#c09d00',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
