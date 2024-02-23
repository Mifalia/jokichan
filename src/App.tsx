import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'JokiChan';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
