import styles from "./Header.module.scss";
import Nav from "./Nav";
import logo from "@assets/logo.png";

import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <img className={styles.logo} src={logo} alt="logo" />

        <div className={styles.navContainer}>
          <Nav />
        </div>

        <div className={styles.rightCol}>
          <li className={styles.link}>
            <a href="#">Contact Us</a>
          </li>

          <HiMenuAlt3 className={styles.hamburger} />
        </div>
      </div>
    </header>
  );
};

export default Header;
