import Navigation from './Navigation';
import styles from './Layout.module.css';

export interface Iprops {
  children: React.ReactNode;
}

const Layout: React.FC<Iprops> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
