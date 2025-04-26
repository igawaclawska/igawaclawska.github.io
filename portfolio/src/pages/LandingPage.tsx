import { useRef } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Section from "../components/Section";
import Heading from "../components/Heading";
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
                <h1>I develop user-first digital experiences</h1>
              </div>
              <p className={styles.subheadline}>
                I’m a Copenhagen-based
                <span className={styles.highlightedText}>
                  &#32;frontend developer&#32;
                </span>
                specializing in JavaScript and React, with a&nbsp;background
                in&nbsp;UX/UI design. My goal is to create digital solutions
                that are accessible and inclusive for everyone, while also being
                intuitive and high-performing.
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
          <Heading level={2} isUnderlined={true} ref={sectionRef} tabIndex={-1}>
            Projects
          </Heading>
          <ProjectCart
            to={"/project"}
            title={`Zeeguu - Frontend Optimization and UI\u00A0Improvements`}
            description={`Contributing to the front-end development of the Zeeguu language learning 
            platform, with a focus on accessibility enhancements, responsive UI components, intuitive onboarding flows, and overall
            user interface improvements. Optimizing front-end performance while
            refining a\u00A0mobile\u2011first, component-based architecture to enhance
            scalability, visual consistency, and user\u00A0experience.`}
            technologies={[
              "React",
              "JavaScript",
              "CSS",
              "Styled Components",
              "HTML",
            ]}
            imageSrc="zeeguu-mockup.png"
          />
          <ProjectCart
            isExternal={true}
            to={"https://www.opeepl.com/"}
            title={`Opeepl - Website\u00A0Design`}
            description={`Contributed to the full redesign of the Opeepl.com website with its subpages, 
            focusing on\u00A0creating a clean, mobile\u2011friendly\u00A0UI layout aligned with the brand’s 
            visual style guide. Designed and delivered modular Figma mockups optimized for\u00A0seamless integration
            with the Squarespace templates, allowing faster content updates and easier maintenance. Created static and 
            animated visual assets, including illustrations and animations, to\u00A0improve visual storytelling and strengthen 
            brand\u00A0presence.`}
            technologies={[
              "UX/UI",
              "Prototyping",
              "Graphic Design",
              "Motion Design",
              "Figma",
              "Adobe Illustrator",
              "Adobe After Effects",
            ]}
            imageSrc="zeeguu-mockup.png"
          />
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default LandingPage;
