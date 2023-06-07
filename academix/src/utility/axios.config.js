import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export default instance;
