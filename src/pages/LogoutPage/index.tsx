import { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialUserValues } from '~/App';
import routes from '~/constants/routes';
import UserType from '~/types/UserType';

type LogoutPageProps = {
  setUser: Dispatch<SetStateAction<UserType>>;
};

const LogoutPage = ({ setUser }: LogoutPageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Delete token from axios headers
    // Send request to logout endpoint

    localStorage.removeItem('access_token');
    setUser({ ...initialUserValues });
    navigate(routes.login);
  }, []);

  return <>Logging out</>;
};

export default LogoutPage;
