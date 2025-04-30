import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { PageWrapper, TopSection } from './styles/global';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <PageWrapper>
      <TopSection />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
