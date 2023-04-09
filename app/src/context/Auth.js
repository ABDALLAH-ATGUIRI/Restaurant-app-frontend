import React, { useState, createContext, useEffect, useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { instance } from "../utils/api/axios";
export const AuthContext = createContext();

function AuthProvider(props) {
  const [auth, setAuth] = useState({});

  const login = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);

    if (token) {
      const {
        data: { success }
      } = await instance.get("/auth/token/" + decoded.id, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (success) {
        setAuth(() => ({
          token: token,
          user: decoded,
          id: decoded?.id,
          role: decoded?.role
        }));
        console.log("auth", auth)
      } else {
        logout();
      }
    } else {
      logout();
    }
  };

  const logout = () => {
    setAuth({});
    localStorage.clear();
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

/**
 * in general cases I dont need to check the local storage
 */
export const RequireAuth = () => {
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (auth?.token !== "" && auth?.role !== "user") setLoading(false);
  }, [loading, auth]);

  return auth?.token && auth?.role === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export const RequireAuthAdmin = () => {
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (auth?.token !== "" && auth?.role !== "admin") setLoading(false);
  }, [loading, auth]);

  return auth?.token && auth?.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default AuthProvider;
