import api from "./axios.js";

// Create contact message
export const createContact = async (contactData) => {
  const { data } = await api.post("/contact", contactData);
  return data;
};

// Get all contact messages
export const getAllContacts = async () => {
  const { data } = await api.get("/contact");
  return data;
};

// Update contact status
export const updateContactStatus = async (id, status) => {
  const { data } = await api.patch(`/contact/${id}`, {
    status,
  });

  return data;
};

// Delete contact message
export const deleteContact = async (id) => {
  const { data } = await api.delete(`/contact/${id}`);
  return data;
};