import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <img src='/logo.png' alt="TVS Logo" className={styles.logo} />

      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <a href="#">Links</a>
        <a href="#">Contact</a>
        <a href="#">Legal notice</a>
        <a href="#">Data protection</a>
        <a href="#">DE</a>
        <a href="#">FR</a>
        <a href="#">IT</a>
        <a href="#">EN</a>
      </nav>
    </header>
  );
};

export default Header;
