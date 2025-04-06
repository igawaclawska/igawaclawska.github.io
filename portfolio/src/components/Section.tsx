import { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  children: ReactNode | ReactNode[];
};

const Section = ({ children }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
