import { NavLink } from 'react-router-dom';
import routes from '~/constants/routes';

import logo from '~/assets/logo.webp';

import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { logOut, selectUser } from '~/features/user/userSlice';

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
    href: routes.createArticle,
  },
];

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

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
            <NavLink
              to={routes.login}
              onClick={() => {
                dispatch(logOut());
              }}
              className={styles.link}
            >
              Log out →
            </NavLink>
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
