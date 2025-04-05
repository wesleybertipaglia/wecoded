import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://dev.to/api",
  });

  return api;
};

export default useApi;
