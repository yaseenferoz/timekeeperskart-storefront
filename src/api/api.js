import axios from "axios";

const API = axios.create({
  baseURL: "https://api.timekeeperskart.online",
});

export default API;