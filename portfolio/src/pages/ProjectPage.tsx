import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <h1>Landing Page</h1>
      </Main>
      <Footer>
        <p>Footer here</p>
      </Footer>
    </div>
  );
};

export default ProjectPage;
