import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import LinkedInIcon from "./icons/LinkedInIcon";

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
              aria-label="Let's connect on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/iga-waclawska/"
              className={styles.link}
            >
              <LinkedInIcon height={26} width={26} />
              Let's connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
