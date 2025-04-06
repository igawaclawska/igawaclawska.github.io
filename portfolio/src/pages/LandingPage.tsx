import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Section from "../components/Section";
import ProjectCart from "../components/ProjectCart";
import Button from "../components/Button";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/project");
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
                <p>FRONTEND DEVELOPER</p>
                <h1>I develop accessible and intuitive digital experiences</h1>
              </div>
              <p>
                I’m a Copenhagen-based frontend developer specializing in
                JavaScript and React, with a background in UX/UI design. Driven
                by a commitment to web accessibility, I focus on developing
                high-performing, intuitive digital experiences.
              </p>

              <div>
                <Button>See Projects</Button>
              </div>
            </div>
            <div>
              <img
                // alt=""
                src="https://images.unsplash.com/photo-1612839298857-4f3a2b8c5d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              />
            </div>
          </div>
        </Section>
        <Section>
          <h2>Projects</h2>
          <ProjectCart>
            <p>Project Cart here</p>
          </ProjectCart>
          <Button onClick={handleButtonClick}>Go to project</Button>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default LandingPage;
