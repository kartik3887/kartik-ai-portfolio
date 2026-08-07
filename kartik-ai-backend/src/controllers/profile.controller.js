import {
  createProfile,
  getProfile,
  updateProfile,
} from "../services/profile.service.js";

const parseFormData = (body) => {
  if (body.socials && typeof body.socials === "string") {
    body.socials = JSON.parse(body.socials);
  }

  if (body.roles && typeof body.roles === "string") {
    body.roles = JSON.parse(body.roles);
  }

  if (body.availableForWork !== undefined) {
    body.availableForWork = body.availableForWork === "true";
  }

  return body;
};

export const createProfileController = async (req, res, next) => {
  try {
    req.body = parseFormData(req.body);

    const profile = await createProfile(req.body, req.file);

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: profile,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getProfileController = async (req, res, next) => {
  try {
    const profile = await getProfile();

    res.status(200).json({
      success: true,
      message: "Profile data fetched successfully",
      data: profile,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const updateProfileController = async (req, res, next) => {
  try {
    req.body = parseFormData(req.body);

    const profile = await updateProfile(req.body, req.file);

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: profile,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};