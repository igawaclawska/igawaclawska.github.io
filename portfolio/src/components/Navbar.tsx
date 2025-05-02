import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              Iga Waclawska
            </Link>
          </li>
          <li className={styles.li}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/iga-waclawska/"
              className={styles.link}
            >
              Let's connect on LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
