import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider, { RequireAuth, RequireAuthAdmin } from "./context/Auth";
import RestaurantDashboard from "./pages/restaurant-management";
import { Login } from "./pages/auth/Login";
import { SignIn } from "./pages/auth/SignIn";
import AdminDashboard from "./pages/admen-management";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* routes of user */}
          <Route element={<RequireAuth />}>
            
            <Route
              path="/client/*"
              element={<RestaurantDashboard />}
            />

          </Route>

          {/* routes of admin */}
          <Route element={<RequireAuthAdmin />}>
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
