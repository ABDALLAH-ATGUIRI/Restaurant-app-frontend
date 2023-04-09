import axios from "axios";

export function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export function getInstance(token) {
	return axios.create({
		headers: { Authorization: `Bearer ${token}` },
		baseURL: process.env.REACT_APP_BASE_URL,
	});
}
