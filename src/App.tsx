import { Routes, Route } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductsPage';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
