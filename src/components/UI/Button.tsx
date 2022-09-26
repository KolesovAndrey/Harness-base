import styles from './Button.module.css';

interface Props {
  title: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ title, type }) => {
  return (
    <button type={type} className={styles.button}>
      {title}
    </button>
  );
};

export default Button;
