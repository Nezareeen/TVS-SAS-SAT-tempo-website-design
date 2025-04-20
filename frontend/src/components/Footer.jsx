import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Address Column */}
          <div className={styles.addressColumn}>
            <h3 className={styles.heading}>Address</h3>
            <div className={styles.addressContent}>
              <p className={styles.companyName}>TVS SAS SAT</p>
              <p className={styles.street}>Schwarztorstrasse 31</p>
              <p className={styles.cityZip}>3007 Bern</p>
              <a href="mailto:info@tvs.ch" className={styles.email}>
                <span className={styles.emailIcon}>✉</span> info@tvs.ch
              </a>
              <img 
                src="/logo-nobg.png" 
                alt="Certification Logo" 
                className={styles.certLogo} 
              />
            </div>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsletterColumn}>
            <h3 className={styles.heading}>Newsletter subscription</h3>
            <p className={styles.newsletterText}>
              Receive exclusive information about TVS news and the partner network via e-mail.
            </p>
            <div className={styles.subscribeForm}>
              <input 
                type="email" 
                placeholder="Enter e-mail address" 
                className={styles.emailInput} 
              />
              <button className={styles.sendButton}>Send</button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyrightSection}>
          <p className={styles.copyright}>
            © 2025 Trassenvergabestelle - Alle Rechte vorbehalten
          </p>
          <p className={styles.credits}>
            Site by WeServe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;