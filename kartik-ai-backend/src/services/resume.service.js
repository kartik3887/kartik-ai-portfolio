import Resume from "../models/Resume.js";
import { uploadPDF } from "../utils/cloudinaryUpload.js";
import fs from "fs";

export const createResumeService = async (file, userId) => {
  const uploadResult = await uploadPDF(file.path);

  const resume = await Resume.create({
    fileUrl: uploadResult.secure_url,

    publicId: uploadResult.public_id,

    uploadedBy: userId,
  });

  fs.unlinkSync(file.path);

  return resume;
};

export const getResumeService = async () => {
  const resume = await Resume.findOne().sort({
    createdAt: -1,
  });

  return resume;
};

export const deleteResumeService = async (id) => {
  const resume = await Resume.findById(id);

  if (!resume) {
    throw new Error("Resume not found");
  }

  await Resume.findByIdAndDelete(id);

  return resume;
};
