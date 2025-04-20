import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`${styles.textContainer} ${styles.fadeIn}`}>
        <h1>Experience Seamless Travel</h1>
        <p>Your gateway to real-time railway timetables and updates.</p>
        <button className={styles.ctaButton}>View Timetables</button>
      </div>
    </section>
  );
};

export default Hero;
