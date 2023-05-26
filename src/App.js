import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NavTabs from './components/NavTabs';
import SnackBar from './components/SnackBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Container
        maxWidth="md"
        sx={{
          margin: '70px auto',
          borderRadius: '20px',
          padding: '10px 0px',
        }}
      >
        <NavTabs />
        <SnackBar />
      </Container>
    </div>
  );
}

export default App;
