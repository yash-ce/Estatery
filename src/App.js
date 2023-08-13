import './App.css';
import Header from './components/Header/Header';
import HouseProvider from './context/HouseContext';
import { Container } from '@chakra-ui/react';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <HouseProvider>
      <Container maxW='container.lg' px='6'>
        <Header />
        <Outlet/>
      </Container>
      <Footer />
    </HouseProvider>
  );
}

export default App;
