import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fee818'
    },
    secondary: {
      main: '#dadada'
    }
  },
  typography: {
    fontFamily: ['"Titillium Web"', 'Arial', 'sans-serif'].join(','),
    button: {
      textTransform: 'none'
    }
  }
});
