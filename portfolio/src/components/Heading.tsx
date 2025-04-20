import React, { forwardRef } from "react";
import styles from "./Heading.module.css";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  isUnderlined?: boolean;
  alignment?: "left" | "center" | "right";
  primaryColor?: boolean;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 1,
      isUnderlined = false,
      alignment = "center",
      primaryColor = false,
      children,
      ...props
    },
    ref
  ) => {
    const Tag: keyof React.JSX.IntrinsicElements = `h${level}`;

    const alignmentClass =
      alignment === "left"
        ? styles.alignLeft
        : alignment === "right"
        ? styles.alignRight
        : styles.alignCenter;

    const levelClass = styles[`headingLevel${level}`];

    return (
      <Tag
        className={`${styles.heading} ${levelClass} ${alignmentClass} ${
          isUnderlined ? styles.underline : ""
        } ${primaryColor ? styles.primaryColor : ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

export default Heading;
