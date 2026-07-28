import api from "./axios.js";


export const getSkills = async () => {
    const res = await api.get("/skills");
    return res.data;
};


export const createSkill = async (data) => {
    const res = await api.post("/skills", data);
    return res.data;
};


export const updateSkill = async (id, data) => {
    const res = await api.put(`/skills/${id}`, data);
    return res.data;
};


export const deleteSkill = async (id) => {
    const res = await api.delete(`/skills/${id}`);
    return res.data;
};

export const togglePublishSkill = async (id) => {
    const res = await api.patch(`/skills/${id}/publish`);
    return res.data;
};