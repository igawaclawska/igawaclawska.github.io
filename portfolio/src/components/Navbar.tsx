import Link from "./Link";
import styles from "./Navbar.module.css";
import LinkedInIcon from "./icons/LinkedInIcon";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <ul className={styles.ul}>
          <Link to="/" ariaLabel="Go to home page">
            Iga Waclawska
          </Link>
          <Link
            aria-label="Let's connect on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.linkedin.com/in/iga-waclawska/"
          >
            <LinkedInIcon height={26} width={26} />
            Let's connect
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
