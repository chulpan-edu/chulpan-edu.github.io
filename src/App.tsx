import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './containers/main-page/MainPage';
import AboutPage from './containers/about-page/AboutPage';
import './App.css';
import Header from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { Content } from '@components/content/Content';
import { WorkWithParents } from './pages/teachers/WorkWithParents';

function App() {
  return (
    <HashRouter>
      <Header />
      <Content>
        <Routes>
          <Route path="*" element={<WorkWithParents />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Content>
      <Footer />
    </HashRouter>
  );
}

export default App;
