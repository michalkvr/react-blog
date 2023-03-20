import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserType from '~/types/UserType';
import TokenType from '~/types/TokenType';
import routes from '~/constants/routes';

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
      axios.defaults.headers.common.Authorization = response.data.access_token;
      setUser({ ...user, loggedIn: true });
      navigate(routes.myArticles);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="username"
        required
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        required
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;
