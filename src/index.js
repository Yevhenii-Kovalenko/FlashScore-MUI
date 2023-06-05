import React from 'react';

import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import './index.css';
import DataProvider from './context/DataContext';
import { MatchProvider } from './context/MatchContext';
import { SidebarProvider } from './context/SidebarContext';
import { theme } from './theme';

// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';

// const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    {/* <QueryClientProvider client={queryClient}> */}
    <DataProvider>
      <BrowserRouter>
        <MatchProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </MatchProvider>
      </BrowserRouter>
    </DataProvider>
    {/* </QueryClientProvider> */}
  </ThemeProvider>
);
