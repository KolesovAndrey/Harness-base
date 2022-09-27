import { FormEvent, useRef } from 'react';

import Button from '../UI/Button';
import styles from './AuthForm.module.css';

const AuthForm: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    if (enteredEmail.trim().length > 0 && enteredEmail.includes('@')) {
      console.log('email valid');
    }

    const enteredPassword = passwordInputRef.current!.value;
    if (enteredPassword.trim().length >= 10) {
      console.log('password is valid');
    }
  };

  return (
    <form className={styles['auth-form']} onSubmit={formSubmitHandler}>
      <p>Please enter your account data</p>
      <div className={styles['form-control']}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Example@mail.com"
          ref={emailInputRef}
        />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Min length 10"
          ref={passwordInputRef}
        />
      </div>

      <Button title="Login" type="submit" className={styles['submit-button']} />
    </form>
  );
};

export default AuthForm;
