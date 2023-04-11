import styled from "styled-components";
import { Fragment, useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../../components/restaurant-components/sidebar";
import { lightGray } from "../../utils/colors";
import Header from "../../components/restaurant-components/header";
import { Home } from "./Home";
import { AuthContext } from "../../context/Auth";
import { MENUITEMS } from './appendix/menu-items';
import Restaurants from "./Restaurants";
import RestaurantProfile from "./RestaurantProfile";
import CategoriesMenu from "./CategoriesMenu";



function Index() {


    return (
        <Fragment>
            <AppWithStore>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Restaurant routes */}
                        <Route path="/restaurant" element={<Restaurants />} />
                        <Route path="/restaurant/:id/menu" element={<CategoriesMenu />} />
                        <Route path="/restaurant/:id" element={<RestaurantProfile />} />

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
                    <div className="w-full flex-col ml-1" style={{ backgroundColor: lightGray }}>
                        <Header title={"menu Category"} user={user} />

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


