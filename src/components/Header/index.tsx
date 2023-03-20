import { NavLink } from 'react-router-dom';
import routes from '~/constants/routes';

import logo from '~/assets/logo.webp';

import styles from './styles.module.scss';
import UserType from '~/types/UserType';

const publicNavItems = [
  {
    label: 'Recent articles',
    href: routes.recentArticles,
  },
  {
    label: 'About',
    href: routes.about,
  },
];

const userNavItems = [
  {
    label: 'My Articles',
    href: routes.myArticles,
  },
  {
    label: 'Create Article',
    href: routes.articleForm,
  },
  {
    label: 'Sign out →',
    href: routes.logout,
  },
];

type HeaderProps = {
  user: UserType;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.nav} aria-label="Public Navigation">
          <a href={routes.home} className={styles.logo}>
            <img src={logo} alt="" />
          </a>
          {publicNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {user.loggedIn ? (
          <nav className={styles.nav} aria-label="User Navigation">
            {userNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  isActive ? `${styles.active} ${styles.link}` : styles.link
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : (
          <NavLink className={styles.nav} key={routes.login} to={routes.login}>
            Log In →
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
