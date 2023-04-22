import axios from "axios";

export default axios.create({
    baseURL: "https://api-keuangan-ku.vercel.app",
    headers: {
        Authorization: localStorage.getItem("token"),
    },
});
