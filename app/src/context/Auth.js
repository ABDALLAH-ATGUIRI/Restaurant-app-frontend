import React, { useState, createContext, useEffect, useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
export const AuthContext = createContext();

function AuthProvider(props) {
	const [auth, setAuth] = useState({});

	console.log(auth);

	async function login() {
		const token = localStorage.getItem("token");

		if (token) {
			const {
				data: { success },
			} = await axios.get(`${process.env.REACT_APP_API_URL}/auth/token`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			if (success) {
				const decoded = jwt_decode(token);
				setAuth((init) => ({
					// ...init,
					token,
					id: decoded?.id,
					type: decoded?.type,
				}));
			} else {
				logout();
			}
		} else {
			logout();
		}
	}

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
	const [loading, setloading] = useState(true);

	const location = useLocation();

	useEffect(() => {
		if (auth?.token !== "") setloading(false);
	}, [loading, auth]);

	return auth?.token ? (
		<Outlet />
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
};

export default AuthProvider;
