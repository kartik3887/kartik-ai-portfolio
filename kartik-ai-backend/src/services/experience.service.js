import Experience from "../models/Experience.js";
import ApiError from "../utils/ApiError.js";
import { uploadFile } from "./cloudinary.service.js";

/*
=========================================
Create Experience
=========================================
*/
export const createExperienceService = async (req) => {
  const {
    company,
    role,
    employmentType,
    location,
    startDate,
    endDate,
    currentlyWorking,
    description,
    technologies,
    order,
    isPublished,
  } = req.body;

  if (!company || !role || !startDate) {
    throw new ApiError(
      400,
      "Company, Role and Start Date are required"
    );
  }

  let companyLogo = {
    url: "",
    public_id: "",
  };

  if (req.file) {
    companyLogo = await uploadFile(
      req.file,
      "kartik-ai/experience"
    );
  }

  const experience = await Experience.create({
    company: company.trim(),
    role: role.trim(),
    employmentType,
    companyLogo,
    location,
    startDate,
    endDate: currentlyWorking ? null : endDate,
    currentlyWorking,
    description:
      typeof description === "string"
        ? JSON.parse(description)
        : description,

    technologies:
      typeof technologies === "string"
        ? JSON.parse(technologies)
        : technologies,

    order,
    isPublished,
  });

  return experience;
};

/*
=========================================
Get All Public Experiences
=========================================
*/
export const getAllExperienceService = async () => {
  return await Experience.find({
    isPublished: true,
  }).sort({
    order: 1,
    startDate: -1,
  });
};

/*
=========================================
Admin Get All Experiences
=========================================
*/
export const getAdminExperienceService = async () => {
  return await Experience.find().sort({
    order: 1,
    startDate: -1,
  });
};

/*
=========================================
Get Experience By ID
=========================================
*/
export const getExperienceByIdService = async (id) => {
  const experience = await Experience.findById(id);

  if (!experience) {
    throw new ApiError(
      404,
      "Experience not found"
    );
  }

  return experience;
};

import { replaceFile, deleteFile } from "./cloudinary.service.js";

/*
=========================================
Update Experience
=========================================
*/
export const updateExperienceService = async (req) => {
  const { id } = req.params;

  const experience = await Experience.findById(id);

  if (!experience) {
    throw new ApiError(404, "Experience not found");
  }

  const data = { ...req.body };

  // Replace Company Logo
  if (req.file) {
    const companyLogo = await replaceFile(
      experience.companyLogo?.public_id,
      req.file,
      "kartik-ai/experience"
    );

    data.companyLogo = companyLogo;
  }

  // Trim Strings
  if (data.company) {
    data.company = data.company.trim();
  }

  if (data.role) {
    data.role = data.role.trim();
  }

  if (data.location) {
    data.location = data.location.trim();
  }

  // Parse Arrays
  if (typeof data.description === "string") {
    data.description = JSON.parse(data.description);
  }

  if (typeof data.technologies === "string") {
    data.technologies = JSON.parse(data.technologies);
  }

  // Current Working Logic
  if (data.currentlyWorking === "true" || data.currentlyWorking === true) {
    data.currentlyWorking = true;
    data.endDate = null;
  }

  if (data.currentlyWorking === "false") {
    data.currentlyWorking = false;
  }

  const updatedExperience =
    await Experience.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

  return updatedExperience;
};

/*
=========================================
Delete Experience
=========================================
*/
export const deleteExperienceService = async (id) => {
  const experience = await Experience.findById(id);

  if (!experience) {
    throw new ApiError(404, "Experience not found");
  }

  if (experience.companyLogo?.public_id) {
    await deleteFile(
      experience.companyLogo.public_id
    );
  }

  await experience.deleteOne();

  return true;
};

/*
=========================================
Toggle Publish
=========================================
*/
export const togglePublishExperienceService =
  async (id) => {
    const experience =
      await Experience.findById(id);

    if (!experience) {
      throw new ApiError(
        404,
        "Experience not found"
      );
    }

    experience.isPublished =
      !experience.isPublished;

    await experience.save();

    return experience;
  };