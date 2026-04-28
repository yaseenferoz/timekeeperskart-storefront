import axios from "axios";

const API = axios.create({
  baseURL: "https://api.ma-quality-products.online",
});

export default API;