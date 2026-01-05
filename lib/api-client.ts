import axios from "axios";

const apiClient = axios.create({
baseURL: "http://localhost:8080",
headers: {
"Content-Type": "application/json",
},
withCredentials: false, // ❗ MUST be false
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API ERROR:", error?.response?.data || error.message);
    throw error;
  }
);

export default apiClient;
