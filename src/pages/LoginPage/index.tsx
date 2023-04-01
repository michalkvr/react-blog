import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '~/constants/routes';
import Input from '~/features/ui/components/Input';
import Button from '~/features/ui/components/Button';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { logIn, selectUser } from '~/features/user/userSlice';
import CredentialsType from '~/types/CredentialsType';

import styles from './styles.module.scss';

const initialValues: CredentialsType = {
  username: '',
  password: '',
};

const LoginPage = () => {
  const [credentials, setCredentials] = useState(initialValues);

  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(logIn(credentials));
    setCredentials(initialValues);
  };

  useEffect(() => {
    if (user.loggedIn) navigate(routes.home);
  }, [user]);

  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Log in</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            id="username"
            label="Username"
            required
            value={credentials.username}
            placeholder="johndoe"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <Input
            id="password"
            label="Password"
            type="password"
            required
            value={credentials.password}
            placeholder="••••••••••"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
