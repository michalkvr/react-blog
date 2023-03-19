import { NavLink } from 'react-router-dom';
import routes from '~/constants/routes';

import logo from '~/assets/logo.webp';

import styles from './styles.module.scss';

const menuItems = [
  {
    label: 'Recent articles',
    href: routes.recentArticles,
  },
  {
    label: 'About',
    href: routes.about,
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav>
          <a href={routes.home} className={styles.logo}>
            <img src={logo} alt="" />
          </a>
          {menuItems.map((item) => (
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
      </div>
    </header>
  );
}

export default Header;
