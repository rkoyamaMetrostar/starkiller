import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { APP_TITLE } from '../../constants';
import logo from '../../../assets/img/logo.png';
import { Banner, Icon, IconType } from '@starkiller/base';
import styles from './header.module.scss';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const handleMenuClick = () => {
    window.scrollTo({ top: 0 });
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const ref = document.body.classList;
    showMenu ? ref.add(styles['no-scroll']) : ref.remove(styles['no-scroll']);
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <header
      className={`${styles['header']} ${
        showMenu ? styles['header-active'] : ''
      }`}
    >
      <div className="usa-nav-container">
        <div>
          <Link to="/" className={styles['header-logo']}>
            <img src={logo} alt={`${APP_TITLE} logo.`} />
          </Link>
          <button
            className={styles['header-menu-button']}
            onClick={handleMenuClick}
          >
            <Icon
              id="menu-icon"
              type={!showMenu ? IconType.menu : IconType.close}
            />
            {!showMenu ? 'Menu' : 'Close'}
          </button>
        </div>
        <div className={styles['header-content']}>
          <nav className={styles['header-nav']}>
            <ul>
              <li className="usa-nav__primary-item">
                <NavLink
                  id="home-link"
                  to="/"
                  className={`usa-nav__link ${
                    location.pathname === '/' ? 'usa-current' : ''
                  }`}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
