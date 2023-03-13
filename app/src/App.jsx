import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import { Banner } from "./components/Banner";
import { orange } from "./utils/colors/global.colors";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <NavbarComponent />
        <Hero />
        <Banner />
      </Container>
    </div>
  );
}


const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: ${orange};
`

export default App;


