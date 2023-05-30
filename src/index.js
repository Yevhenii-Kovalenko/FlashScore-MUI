import React from 'react';

import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { MatchProvider } from './context/MatchContext';
import { SidebarProvider } from './context/SidebarContext';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <MatchProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </MatchProvider>
    </BrowserRouter>
  </ThemeProvider>
);
