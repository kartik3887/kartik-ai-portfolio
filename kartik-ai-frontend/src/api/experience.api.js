import api from "./axios.js";

export const getAdminExperiences = async () => {
  const res = await api.get("/experience/");
  return res.data;
};

export const createExperience = async (data) => {
  const res = await api.post("/experience", data);

  return res.data;
};

export const updateExperience = async (id, data) => {
  const res = await api.put(`/experience/${id}`, data);

  return res.data;
};

export const deleteExperience = async (id) => {
  const res = await api.delete(`/experience/${id}`);

  return res.data;
};

export const togglePublishExperience = async (id) => {
  const res = await api.patch(`/experience/${id}/publish`);

  return res.data;
};
