import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserType from '~/types/UserType';
import TokenType from '~/types/TokenType';
import routes from '~/constants/routes';
import Input from '~/features/ui/components/Input';
import Button from '~/features/ui/components/Button';

import styles from './styles.module.scss';
import { addTokenToHeader } from '~/utils/api';
import showAlert from '~/utils/swal';

type LoginPageProps = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

const LoginPage = ({ user, setUser }: LoginPageProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post<TokenType>('login', { username, password }).then((response) => {
      localStorage.setItem('access_token', response.data.access_token);
      addTokenToHeader(response.data.access_token);
      setUser({ ...user, loggedIn: true });
      showAlert('Logged in successfully!', 'success');
      navigate(routes.myArticles);
    });
  };

  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Log in</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            id="username"
            label="Username"
            required
            value={username}
            placeholder="johndoe"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            required
            value={password}
            placeholder="••••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
