import styled from "styled-components";
import { Fragment } from "react";
import Sidebar from "./layout/sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./layout/header";
import Footer from "./layout/footer";

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
    <Container>
      <div className="w-full h-full duration-300 ease-in-out font-sans text-gray-900 ">
        {/* <Sidebar /> */}
        <div className=" w-full flex-col">
          <div className="overscroll-auto relative">
            <Header />
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: 100%;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

export default App;


