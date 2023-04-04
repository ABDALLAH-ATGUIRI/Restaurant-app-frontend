import "./App.css";
import styled from "styled-components";
import { Fragment } from "react";
import Sidebar from "./layout/sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./layout/header";

function App() {
  return (
    <Fragment>
      <AppWithStore>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </AppWithStore>
    </Fragment>
  );
}

function AppWithStore({ children }) {
  return (
    <div className="App">

      <Container>
        <div className="w-full duration-300 ease-in-out font-sans text-gray-900 flex">
          <Sidebar />
          <div className="w-full flex-col">
            <Header />
            <div className="overscroll-auto  ">
              {children}
            </div>
            {/* <Footer /> */}
          </div>
        </div>
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
`

export default App;


