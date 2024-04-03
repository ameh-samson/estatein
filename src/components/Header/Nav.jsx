import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.linkContainer}>
        <li className={styles.link}>
          <a>Home</a>
        </li>
        <li className={styles.link}>
          <a>About Us</a>
        </li>
        <li className={styles.link}>
          <a>Properties</a>
        </li>
        <li className={styles.link}>
          <a>Service</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
