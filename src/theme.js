import { createTheme } from '@mui/material';
import { teal, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
      contrastText: '#fff',
    },
    secondary: {
      main: '#fafafa',
    },
    error: {
      main: red[900],
    },
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          background: '#a5d6a7',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: '#dcedc8',
          margin: '10px 0px',
          padding: '10px',
          borderRadius: '10px',
          color: 'black',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          width: '300px',
          color: 'white',
        },
      },
    },
  },
});
