import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import deleteFromCloudinary from "../utils/deleteFromCloudinary.js";
import removeLocalFile from "../utils/removeLocalFile.js";

export const uploadFile = async (
  file,
  folder,
  resourceType = "auto"
) => {
  if (!file) return null;

  const result = await uploadToCloudinary(
    file.path,
    folder,
    resourceType
  );

  removeLocalFile(file.path);

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
};

export const replaceFile = async (
  oldPublicId,
  file,
  folder,
  resourceType = "auto"
) => {
  if (!file) return null;

  if (oldPublicId) {
    await deleteFromCloudinary(oldPublicId, resourceType);
  }

  const result = await uploadToCloudinary(
    file.path,
    folder,
    resourceType
  );

  removeLocalFile(file.path);

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
};

export const deleteFile = async (
  publicId,
  resourceType = "image"
) => {
  if (!publicId) return;

  await deleteFromCloudinary(publicId, resourceType);
};