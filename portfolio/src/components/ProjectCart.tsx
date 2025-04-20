import styles from "./ProjectCart.module.css";
import { Link, To } from "react-router-dom";
import Heading from "./Heading";

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
    <article className={styles.background}>
      <div className={styles.projectDescriptionContainer}>
        <Heading alignment="left" level={3}>
          {title}
        </Heading>
        <p>{description}</p>
        {technologies.length > 0 && (
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.technology}>
                {tech}
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
    </article>
  );
};

export default ProjectCart;
