import { Outlet } from 'react-router-dom';
import Header from '../Header';
import UserType from '~/types/UserType';

type LayoutProps = {
  user: UserType;
};

const Layout = ({ user }: LayoutProps) => {
  return (
    <>
      <Header user={user} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
