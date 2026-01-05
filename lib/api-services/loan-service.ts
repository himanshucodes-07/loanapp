import apiClient from "../api-client";

export const getLoanTypes = async () => {
const res = await apiClient.get("/api/loan-types");
return res.data.data; // unwrap ApiResponse
};
