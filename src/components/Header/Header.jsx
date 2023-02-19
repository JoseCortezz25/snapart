import React, { useState } from "react";
import styles from "./Header.module.css";
import githubIcon from "../../assets/Github-fill-dark.svg";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav}`}>
        <a href="/" className={styles.nav__logo}>
          SnapArt
        </a>
      </nav>
      <nav className={`${styles.nav} repo`}>
        <a
          href="https://github.com/JoseCortezz25"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="Icono de la red social Github" />
        </a>
      </nav>
    </header>
  );
};

export { Header };
