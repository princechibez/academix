import axios from "axios";

const instance = axios.create({
  baseURL: "https://academix-api.onrender.com/api/v1",
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export default instance;
