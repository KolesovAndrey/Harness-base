import Navigation from './Navigation';
import Footer from './Footer';
import styles from './Layout.module.css';

export interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
