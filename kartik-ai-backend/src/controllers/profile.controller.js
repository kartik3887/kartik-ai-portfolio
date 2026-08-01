import Profile from "../models/Profile.js";
import {
  createProfile,
  getProfile,
  updateProfile,
} from "../services/profile.service.js";

export const createProfileController = async (req, res, next) => {
  try {
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
    const profile = await getProfile(req.body, req.file);
    res
      .status(200)
      .json({
        success: true,
        message: "Profile data fetch successfully",
        data: profile,
      });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const updateProfileController = async (req, res, next) => {
  try {
    const profile = await updateProfile(req.body, req.file);

    res
      .status(200)
      .json({
        success: true,
        message: "Profile updated successfully",
        data: profile,
      });
  } catch (error) {
    console.error(error)
    next(error)
  }
};
