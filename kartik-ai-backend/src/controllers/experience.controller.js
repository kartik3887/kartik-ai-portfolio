import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createExperienceService,
  getAllExperienceService,
  getAdminExperienceService,
  getExperienceByIdService,
  updateExperienceService,
  deleteExperienceService,
  togglePublishExperienceService,
} from "../services/experience.service.js";

/*
=========================================
Create Experience
=========================================
*/
export const createExperience = asyncHandler(async (req, res) => {
  const experience = await createExperienceService(req);

  return res.status(201).json(
    new ApiResponse(
      201,
      experience,
      "Experience created successfully"
    )
  );
});

/*
=========================================
Get All Public Experiences
=========================================
*/
export const getAllExperience = asyncHandler(async (req, res) => {
  const experiences = await getAllExperienceService();

  return res.status(200).json(
    new ApiResponse(
      200,
      experiences,
      "Experiences fetched successfully"
    )
  );
});

/*
=========================================
Admin Get All Experiences
=========================================
*/
export const getAdminExperience = asyncHandler(async (req, res) => {
  const experiences = await getAdminExperienceService();

  return res.status(200).json(
    new ApiResponse(
      200,
      experiences,
      "Experiences fetched successfully"
    )
  );
});

/*
=========================================
Get Experience By ID
=========================================
*/
export const getExperienceById = asyncHandler(async (req, res) => {
  const experience = await getExperienceByIdService(req.params.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      experience,
      "Experience fetched successfully"
    )
  );
});

/*
=========================================
Update Experience
=========================================
*/
export const updateExperience = asyncHandler(async (req, res) => {
  const experience = await updateExperienceService(req);

  return res.status(200).json(
    new ApiResponse(
      200,
      experience,
      "Experience updated successfully"
    )
  );
});

/*
=========================================
Delete Experience
=========================================
*/
export const deleteExperience = asyncHandler(async (req, res) => {
  await deleteExperienceService(req.params.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Experience deleted successfully"
    )
  );
});

/*
=========================================
Toggle Publish
=========================================
*/
export const togglePublishExperience = asyncHandler(
  async (req, res) => {
    const experience =
      await togglePublishExperienceService(req.params.id);

    return res.status(200).json(
      new ApiResponse(
        200,
        experience,
        "Experience publish status updated"
      )
    );
  }
);