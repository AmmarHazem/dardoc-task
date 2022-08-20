import axios from "axios";
import { APIKey } from "./constants";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // baseURL: "http://localhost:8000",
  headers: { Accept: "application/json" },
  params: { api_key: APIKey },
});

export default instance;
