import styled from "styled-components";
import { Fragment, useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../../components/restaurant-components/sidebar";
import { lightGray } from "../../utils/colors";
import Header from "../../components/restaurant-components/header";
import CategoriesMenu from "../admen-management/CategoriesMenu";
import { AuthContext } from "../../context/Auth";
import { MENUITEMS } from "./appendix/menu-items";
import { CategoryProducts } from "../admen-management/CategoryProducts";

function Index() {

    return (
        <Fragment>
            <AppWithStore>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route path="/dashboard" element={<CategoriesMenu />} />
                        <Route path="/:category" element={<CategoryProducts />} />

                    </Route>
                </Routes>
            </AppWithStore>
        </Fragment>
    );
}

function AppWithStore({ children }) {
    const { auth } = useContext(AuthContext);
    const { user } = auth;

    return (
        <div className="App">

            <Container>
                <div className="w-full duration-300 ease-in-out font-sans text-gray-900 flex" >
                    <Sidebar MenuItems={MENUITEMS} />
                    <div className="w-full flex-col" style={{ backgroundColor: lightGray }}>
                        <Header title={"menu Catalog"} user={user} />
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


