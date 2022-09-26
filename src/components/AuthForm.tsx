import Button from './UI/Button';
import styles from './AuthForm.module.css';

const AuthForm: React.FC = () => {
  return (
    <form className={styles['auth-form']}>
      <p>Please enter your account data</p>
      <div className={styles['form-control']}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="Example@mail.com" />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="Min length 10" />
      </div>

      <Button title="Submit" type="button" />
    </form>
  );
};

export default AuthForm;
