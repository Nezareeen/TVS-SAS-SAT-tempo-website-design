import React from 'react';
import styles from './SubHeader.module.css';

const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <div className={styles.linkGroup}>
        <a href="#">News / Info centre</a>
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Explanatory notes</a>
        <a href="#">Documentation</a>
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" />
        <button>
          <span role="img" aria-label="search"><img src="/search.png" alt="Magnifying glass" width={20} height={20}/></span>
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
