import axios from "axios";
import { API_URL } from "./config/constants.js";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
