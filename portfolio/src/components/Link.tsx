import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Link.module.css";

type Props = {
  isExternal?: boolean;
  to: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  children: ReactNode | ReactNode[];
};

const Link = ({
  isExternal = false,
  to,
  target,
  rel,
  ariaLabel,
  children,
}: Props) => {
  return (
    <>
      <li className={styles.li}>
        {isExternal ? (
          <a
            aria-label={ariaLabel}
            target={target}
            rel={rel}
            href={to}
            className={styles.link}
          >
            {children}
          </a>
        ) : (
          <RouterLink to={to} className={styles.link}>
            {children}
          </RouterLink>
        )}
      </li>
    </>
  );
};

export default Link;
