import { useRef } from "react";
import { Link } from "react-router-dom";
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
                <p className={styles.highlightedText}>FRONTEND DEVELOPER</p>
                <h1>I develop accessible and intuitive digital experiences</h1>
              </div>
              <p>
                I’m a Copenhagen-based frontend developer specializing in
                JavaScript and React, with a background in UX/UI design. Driven
                by a commitment to web accessibility, I focus on developing
                high-performing, intuitive digital experiences.
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
          <h2 ref={sectionRef} tabIndex={-1}>
            Projects
          </h2>
          <ProjectCart>
            <div>
              <h3>Project Title</h3>
              <p>Project description</p>
              <Link to="/project">Go To Project</Link>
            </div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </ProjectCart>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default LandingPage;
