import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Section from "../components/Section";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <>
      <title>Project</title>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Section>
          <h1>Project Page</h1>
        </Section>
      </Main>
      <Footer />
    </>
  );
};

export default ProjectPage;
