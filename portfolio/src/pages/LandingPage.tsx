import { useRef } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Section from "../components/Section";
import ProjectCart from "../components/ProjectCart";
import Button from "../components/Button";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      const elementPosition =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - 50,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.focus();
        }
      }, 500);
    }
  };
  return (
    <>
      <title>Iga Waclawska - Frontend Developer</title>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Section>
          <div className={styles.grid}>
            <div>
              <div>
                <h1>I develop accessible and intuitive digital experiences</h1>
              </div>
              <p className={styles.subheadline}>
                I’m a Copenhagen-based
                <span className={styles.highlightedText}>
                  &#32;frontend developer&#32;
                </span>
                specializing in JavaScript and React, with a&nbsp;background
                in&nbsp;UX/UI design. Driven by a&nbsp;commitment to&nbsp;web
                accessibility, I&nbsp;focus on developing high-performing,
                intuitive digital&nbsp;experiences.
              </p>

              <div>
                <Button onClick={() => handleScrollToSection()}>
                  See Projects
                </Button>
              </div>
            </div>
            <img className={styles.profileImg} alt="" src="profile-photo.png" />
          </div>
        </Section>
        <Section>
          <h2
            className={`${styles.heading} ${styles.underline}`}
            ref={sectionRef}
            tabIndex={-1}
          >
            Projects
          </h2>
          <ProjectCart
            to={"/project"}
            title="Project Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            technologies={["React", "JavaScript", "CSS"]}
            imageSrc="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default LandingPage;
