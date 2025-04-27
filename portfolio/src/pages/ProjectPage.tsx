import { useLayoutEffect } from "react";
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
              development progresses.
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
        <Section backgroundType="medium">
          <Heading alignment="center" level={2} isUnderlined={true}>
            Hero Section
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-old.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Heading alignment="center" level={2} isUnderlined={true}>
            Log in
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <img
                className={styles.exampleImage}
                src="log-in-old.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <img
                className={styles.exampleImage}
                src="log-in-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section backgroundType="medium">
          <Heading alignment="center" level={2} isUnderlined={true}>
            Registration
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <img
                className={styles.exampleImage}
                src="register-old.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <img
                className={styles.exampleImage}
                src="register-step1-new.png"
                alt="After"
              />
              <img
                className={styles.exampleImage}
                src="register-step2-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Heading alignment="center" level={2} isUnderlined={true}>
            User Onboarding Flow
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <img
                className={styles.exampleImage}
                src="install-extension-old.png"
                alt="Before"
              />
              <img
                className={styles.exampleImage}
                src="extension-installed-old.png"
                alt="Before"
              />
              <figure>
                <img
                  className={styles.exampleImage}
                  src="empty-homepage-old.png"
                  alt="Before"
                />
                <figcaption>Empty homepage before redesign</figcaption>
              </figure>
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <img
                className={styles.exampleImage}
                src="select-interests.png"
                alt="After"
              />
              <img
                className={styles.exampleImage}
                src="exclude-words.png"
                alt="After"
              />
              <img
                className={styles.exampleImage}
                src="install-extension-new.png"
                alt="After"
              />
              <img
                className={styles.exampleImage}
                src="extension-installed-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section backgroundType="medium">
          <Heading alignment="center" level={2} isUnderlined={true}>
            Settings and Sidebar
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading level={3}>Before</Heading>
              <img
                className={styles.exampleImage}
                src="settings-old.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading level={3}>After</Heading>
              <img
                className={styles.exampleImage}
                src="settings-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default ProjectPage;
