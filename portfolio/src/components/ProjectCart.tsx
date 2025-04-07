import { ReactNode } from "react";
import styles from "./ProjectCart.module.css";

type Props = {
  children: ReactNode | ReactNode[];
};

const ProjectCart = ({ children }: Props) => {
  return <div className={styles.background}>{children}</div>;
};

export default ProjectCart;
