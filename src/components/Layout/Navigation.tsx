import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>Harness Base</div>
      <nav>
        <ul>
          <Link to="/">Auth</Link>
          <Link to="main">Main</Link>
          <Link to="products">Products</Link>
          <Link to="about">About</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
