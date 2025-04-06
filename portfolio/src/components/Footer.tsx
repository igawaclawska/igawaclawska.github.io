import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Iga Waclawska {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
