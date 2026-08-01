import cloudinary from "../config/cloudinary.js";

export const uploadPDF = async (path) => {
  const result = await cloudinary.uploader.upload(path, {
    resource_type: "raw",
  });

  return result;
};