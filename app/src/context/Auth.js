import React, { useState, createContext, useEffect, useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { instance } from "../utils/api/axios";
export const AuthContext = createContext();

function AuthProvider(props) {
  const [auth, setAuth] = useState({ token: "", user: "", id: "", role: "" });

  const login = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);

    if (token) {
      await instance
        .get("/auth/token/" + decoded.id, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((res) => {
          if (res.data.success) {
            setAuth({
              token: token,
              user: decoded,
              id: decoded?.id,
              role: decoded?.role
            });
            console.log("auth", auth);
          } else {
            logout();
          }
        })
        .catch((err) => {
          console.log("err", err);
          logout();
        });
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
  const location = useLocation();

  return auth?.role === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export const RequireAuthAdmin = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return auth?.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default AuthProvider;
