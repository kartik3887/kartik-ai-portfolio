import api from "./axios.js";

/*
=========================================
Dashboard Stats
=========================================
*/
export const getDashboardStats = async () => {
  const { data } = await api.get("/dashboard");

  return data;
};