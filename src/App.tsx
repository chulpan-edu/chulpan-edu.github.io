import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './containers/main-page/MainPage';
import AboutPage from './containers/about-page/AboutPage';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
