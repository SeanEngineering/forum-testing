import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageWrapper, TopSection } from './styles/global';
import Navbar from './components/navbar/Navbar';
import { routes } from './routes/routes';

function App() {
  const location = useLocation();
  return (
    <PageWrapper>
      {!location.pathname.includes('signin') && (
        <>
          <TopSection />
          <Navbar />
        </>
      )}

      <Routes>
        {routes.map((item) => {
          return <Route {...item} />;
        })}
      </Routes>
    </PageWrapper>
  );
}

export default App;
