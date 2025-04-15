import styles from "./ProjectCart.module.css";
import { Link, To } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  to: To;
};

const ProjectCart = ({
  title,
  description,
  technologies,
  imageSrc,
  to,
}: Props) => {
  return (
    <Link to={to} className={styles.background}>
      <div className={styles.projectDescriptionContainer}>
        <h3 className={styles.cartHeading}>{title}</h3>
        <p>{description}</p>
        {technologies.length > 0 && (
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.technology}>
                {tech}
                {index < technologies.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
        <Link className={styles.goToLink} to={to}>
          Learn more about this project
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img alt="" src={imageSrc} className={styles.projectImage} />
      </div>
    </Link>
  );
};

export default ProjectCart;
