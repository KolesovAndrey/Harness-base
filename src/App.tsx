import { Routes, Route } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="main" element={<MainPage />}>
            <Route path="product" element={<ProductPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
