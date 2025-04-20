import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  return (
    <>
      <title>Project</title>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Section>
          <h1>Zeeguu - app redesign and implementation</h1>
        </Section>
        <Section>
          <Heading level={2} isUnderlined={true}>
            Landing Page
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                Before
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                After
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Heading level={2} isUnderlined={true}>
            LogIn Flow
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                Before
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                After
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Heading level={2} isUnderlined={true}>
            Registration Flow
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                Before
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                After
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Heading level={2} isUnderlined={true}>
            User Onboarding Flow
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                Before
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                After
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Heading level={2} isUnderlined={true}>
            Settings Page
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                Before
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                After
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="After"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Heading level={2} isUnderlined={true}>
            Navigation
          </Heading>
          <div className={styles.gridContainer}>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                Before
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
                alt="Before"
              />
            </div>
            <div className={styles.exampleContainer}>
              <Heading alignment="left" level={3}>
                After
              </Heading>
              <img
                className={styles.exampleImage}
                src="landing-page-new.png"
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
