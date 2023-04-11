import axios from "axios";

const token = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { Authorization: `Bearer ${token}` }
});
