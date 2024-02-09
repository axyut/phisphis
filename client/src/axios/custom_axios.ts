import axios from "axios";

const custom_axios = axios.create({
  // with vite import env vars with import.meta.env
  baseURL: "http://localhost:3000/api/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  //timeout: 5000, // 5 seconds
});

export default custom_axios;
