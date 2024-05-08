import axios from "axios";

const custom_axios = axios.create({
    // with vite import env vars with import.meta.env
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000/api/",
    headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    //timeout: 5000, // 5 seconds
});

export default custom_axios;
