import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { SidebarProvider } from './context/SidebarContext';
import { MatchProvider } from './context/MatchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <MatchProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </MatchProvider>
  </ThemeProvider>
);
