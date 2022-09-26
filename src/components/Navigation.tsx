import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>App title</h1>
      <nav>
        <ul>
          <Link to="/">Auth</Link>
          <Link to="main">Main</Link>
          <Link to="main/product">Product</Link>
          <Link to="about">About</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
