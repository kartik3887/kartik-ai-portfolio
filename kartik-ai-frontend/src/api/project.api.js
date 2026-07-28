import api from "./axios";

/*
=========================
Get All Projects (Admin)
=========================
*/
export const getAdminProjects = async () => {
  const response = await api.get(
    "/projects/admin/all"
  );

  return response.data;
};

/*
=========================
Create Project
=========================
*/
export const createProject = async (formData) => {
  const response = await api.post(
    "/projects",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

/*
=========================
Update Project
=========================
*/
export const updateProject = async (id, formData) => {
  const response = await api.put(
    `/projects/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

/*
=========================
Delete Project
=========================
*/
export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};

/*
=========================
Toggle Publish
=========================
*/
export const togglePublish = async (id) => {
  const response = await api.patch(
    `/projects/${id}/publish`
  );

  return response.data;
};

/*
=========================
Toggle Featured
=========================
*/
export const toggleFeatured = async (id) => {
  const response = await api.patch(
    `/projects/${id}/featured`
  );

  return response.data;
};