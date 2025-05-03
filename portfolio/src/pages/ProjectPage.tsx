import { useLayoutEffect } from "react";
import zeeguuProject from "../data/zeeguuProject.json";
import projects from "../data/projects.json";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects[0];

  return (
    <>
      <title>Zeeguu</title>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Section>
          <div className={styles.coverContainer}>
            <h1>{project.title}</h1>
            <p className={styles.subheadline}>{project.description}</p>
            {project.technologies.length > 0 && (
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.technology}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Section>

        {zeeguuProject.map((project) => (
          <Section key={project.id}>
            <Heading alignment="center" level={2} isUnderlined={true}>
              {project.title}
            </Heading>
            <div className={styles.gridContainer}>
              <div className={styles.exampleContainer}>
                <Heading level={3}>{project.before.title}</Heading>
                <div className={styles.imagesColumn}>
                  {project.before.content.map((content) => (
                    <figure key={content.id}>
                      <img
                        className={styles.exampleImage}
                        src={content.imgSrc}
                        alt={content.alt}
                      />
                      <figcaption>{content.description}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className={styles.exampleContainer}>
                <Heading level={3}>{project.after.title}</Heading>
                <div className={styles.imagesColumn}>
                  {project.after.content.map((content) => (
                    <figure key={content.id}>
                      <img
                        className={styles.exampleImage}
                        src={content.imgSrc}
                        alt={content.alt}
                      />
                      <figcaption>{content.description}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default ProjectPage;
