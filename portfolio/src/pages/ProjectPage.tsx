import { useLayoutEffect } from "react";
import zeeguuProject from "../data/zeeguuProject.json";
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

  const technologies = [
    "React",
    "JavaScript",
    "CSS",
    "Styled Components",
    "HTML",
  ];

  return (
    <>
      <title>Project</title>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Section>
          <div className={styles.coverContainer}>
            <h1>Zeeguu: Frontend&nbsp;Optimization and UI&nbsp;Improvements</h1>
            <p className={styles.subheadline}>
              Contributing to the front-end development of the Zeeguu language
              learning platform, with a focus on accessibility enhancements,
              responsive UI components, intuitive onboarding flows, and overall
              user interface improvements. Optimizing front-end performance
              while refining a mobile-first, component-based architecture to
              enhance scalability, visual consistency, and user experience. The
              project is ongoing, with additional examples to be added as
              development&nbsp;progresses.
            </p>
            {technologies.length > 0 && (
              <div className={styles.technologies}>
                {technologies.map((tech, index) => (
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
