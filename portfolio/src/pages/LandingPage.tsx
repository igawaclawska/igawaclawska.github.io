import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import ProjectCart from "../components/ProjectCart"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div>
        <Header>
            <Navbar><p>Navbar here</p></Navbar>
        </Header>
        <Main>
            <h1>Landing Page</h1>
            <ProjectCart>
                <p>Project Cart here</p>
            </ProjectCart>
        </Main>
        <Footer>    
            <p>Footer here</p>
        </Footer>
    </div>
  )
}

export default LandingPage
