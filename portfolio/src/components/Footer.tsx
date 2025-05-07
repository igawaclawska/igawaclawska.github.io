import styles from "./Footer.module.css";
import Link from "./Link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.name}>Iga Waclawska {currentYear}</p>
        <ul className={styles.listOfLinks}>
          <Link
            isExternal={true}
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/igawaclawska"
          >
            GitHub
          </Link>
          <Link
            isExternal={true}
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.linkedin.com/in/iga-waclawska/"
          >
            LinkedIn
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
