import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './containers/main-page/MainPage';
import AboutPage from './containers/about-page/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
