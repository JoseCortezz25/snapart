import React from "react";
import githubIcon from "../../assets/Github-fill-dark.svg"
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <h1 className={styles.footer__title}>SnapArt</h1>
        <div className={styles.footer__social}>
          <a
            href="https://github.com/JoseCortezz25"
            className={styles['footer__social-icon']}
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="" />
          </a>
        </div>
        <div className={styles.footer__copy}>Todos los ambidiestros reservados. ☕ </div>
      </div>
    </footer>
  );
};

export { Footer };