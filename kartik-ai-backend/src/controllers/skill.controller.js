import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createSkillService,
  getAllSkillsService,
  getAdminSkillsService,
  getSkillByIdService,
  updateSkillService,
  deleteSkillService,
  togglePublishSkillService,
} from "../services/skill.service.js";

/*
=========================================
Create Skill
=========================================
*/
export const createSkill = asyncHandler(async (req, res) => {
  const skill = await createSkillService(req);
  console.log("File", req.file);
  console.log("Body", req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, skill, "Skill created successfully"));
});

/*
=========================================
Get All Skills
=========================================
*/
export const getAllSkills = asyncHandler(async (req, res) => {
  const skills = await getAllSkillsService();

  return res
    .status(200)
    .json(new ApiResponse(200, skills, "Skills fetched successfully"));
});

/*
=========================================
Admin Get All Skills
=========================================
*/
export const getAdminSkills = asyncHandler(async (req, res) => {
  const skills = await getAdminSkillsService();

  return res
    .status(200)
    .json(new ApiResponse(200, skills, "Skills fetched successfully"));
});

/*
=========================================
Get Skill By Id
=========================================
*/
export const getSkillById = asyncHandler(async (req, res) => {
  const skill = await getSkillByIdService(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, skill, "Skill fetched successfully"));
});

/*
=========================================
Update Skill
=========================================
*/
export const updateSkill = asyncHandler(async (req, res) => {
  const skill = await updateSkillService(req);

  return res
    .status(200)
    .json(new ApiResponse(200, skill, "Skill updated successfully"));
});

/*
=========================================
Delete Skill
=========================================
*/
export const deleteSkill = asyncHandler(async (req, res) => {
  await deleteSkillService(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Skill deleted successfully"));
});

/*
=========================================
Toggle Publish
=========================================
*/
export const togglePublishSkill = asyncHandler(async (req, res) => {
  const skill = await togglePublishSkillService(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, skill, "Skill publish status updated"));
});
