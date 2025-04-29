import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { PageWrapper } from './styles/global';

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
