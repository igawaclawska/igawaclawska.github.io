import { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  children: ReactNode | ReactNode[];
  backgroundType?: "light" | "medium";
};

const Section = ({ children, backgroundType = "light" }: Props) => {
  const backgroundClass =
    backgroundType === "medium"
      ? styles.mediumBackground
      : styles.lightBackground;

  return (
    <section className={`${styles.section} ${backgroundClass}`}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
