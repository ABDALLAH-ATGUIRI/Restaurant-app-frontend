import styled from "styled-components";
import { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../../components/restaurant-components/sidebar";
import { lightGray } from "../../utils/colors";
import Header from "../../components/restaurant-components/header";
import { Home } from "./Home";

function Index() {
    return (
        <Fragment>
            <AppWithStore>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route path="/" element={<Home />} />
                        <Route path="dashboard" element={<Dashboard />} />
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
                <div className="w-full duration-300 ease-in-out font-sans text-gray-900 flex" >
                    <Sidebar />
                    <div className="w-full flex-col" style={{ backgroundColor: lightGray }}>
                        {children}
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

export default Index;


