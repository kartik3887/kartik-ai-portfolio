import api from "./axios";

export const getAdminProfile = async () => {
    const response = await api.get('/profile');
    return response.data;
}

export const createProfile = async (data) =>{
    const response = await api.post('/profile', data);
    return response.data;
}

export const updateAdminProfile = async (data) => {
    const response = await api.patch('/profile', data);
    return response.data;
}
