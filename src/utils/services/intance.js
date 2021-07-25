import axios from "axios";
const currentPath = window.location;

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `${currentPath.protocol}//${currentPath.hostname}:8000/api`
      : `${currentPath.protocol}//${currentPath.hostname}:${currentPath.port}/api`,
});

export default instance;
