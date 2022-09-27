import Button from '../UI/Button';
import styles from './ProductItem.module.css';

interface Props {
  number: number;
  customer: string;
  name: string;
}

const ProductItem: React.FC<Props> = ({ number, customer, name }) => {
  return (
    <div className={styles.product}>
      <div className={styles['product-heading']}>
        <h1 className={styles['product-title']}>{number}</h1>
        <p className={styles['product-customer']}>{customer}</p>
      </div>
      <p>{name}</p>
      <Button title="К списку изделий" className={styles['product-button']} />
    </div>
  );
};

export default ProductItem;
