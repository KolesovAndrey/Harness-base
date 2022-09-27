import styles from './ProductsPage.module.css';
import Product from '../models/product';
import ProductItem from '../components/Products/ProductItem';

const DUMMY_DATA = [
  new Product(8450103888, 'Жгут проводов системы зажигания', 'АвтоВАЗ'),
  new Product(8450103888, 'Жгут проводов системы зажигания', 'АвтоВАЗ'),
  new Product(8450103888, 'Жгут проводов системы зажигания', 'АвтоВАЗ'),
  new Product(8450103888, 'Жгут проводов системы зажигания', 'АвтоВАЗ'),
  new Product(8450103888, 'Жгут проводов системы зажигания', 'АвтоВАЗ'),
  new Product(8450103888, 'Жгут проводов системы зажигания', 'АвтоВАЗ'),
];

const ProductsPage: React.FC = () => {
  return (
    <div className={styles.products}>
      {DUMMY_DATA.map((product) => (
        <ProductItem
          number={product.productNumber}
          customer={product.customer}
          name={product.productName}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
