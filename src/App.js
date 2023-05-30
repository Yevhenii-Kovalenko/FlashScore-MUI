import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material';

import './App.css';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Sidebar from './components/Sidebar';
import SnackBar from './components/SnackBar';
import Standings from './pages/Standings';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="app">
      <Header />
      <Container
        maxWidth="md"
        sx={{
          margin: '70px auto',
          borderRadius: '20px',
          padding: '10px 0px',
        }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<NavTabs />} />
          <Route path="/Home" element={<NavTabs />} />
          <Route path="/Standings" element={<Standings />} />
        </Routes>
        <SnackBar />
      </Container>
    </div>
  );
}

export default App;
