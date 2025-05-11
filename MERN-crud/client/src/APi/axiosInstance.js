import axios from "axios";

export const empBaseUrl = axios.create({
  baseURL: "http://localhost:8000/employee",
});
