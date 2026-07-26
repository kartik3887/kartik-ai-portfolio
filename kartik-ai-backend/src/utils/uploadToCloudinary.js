import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = async (
  filePath,
  folder,
  resourceType = "auto"
) => {
  const result = await cloudinary.uploader.upload(
    filePath,
    {
      folder,
      resource_type: resourceType,
    }
  );

  return result;
};

export default uploadToCloudinary;