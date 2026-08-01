import api from "./axios";

export const getResume = async () => {
  console.log("Calling Resume API...");

  const response = await api.get("/resume");

  console.log("Axios Response:", response);

  return response.data;
};

export const uploadResume = async (formData) => {
  const { data } = await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};

export const deleteResume = async (id) => {
  const { data } = await api.delete(`/resume/${id}`);
  return data;
};