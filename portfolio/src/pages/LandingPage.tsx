import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import ProjectCart from "../components/ProjectCart";
import Button from "../components/Button";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/project");
  };
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <h1>Landing Page</h1>
        <ProjectCart>
          <p>Project Cart here</p>
        </ProjectCart>
        <Button onClick={handleButtonClick}>Go to project</Button>
      </Main>
      <Footer>
        <p>Footer here</p>
      </Footer>
    </div>
  );
};

export default LandingPage;
