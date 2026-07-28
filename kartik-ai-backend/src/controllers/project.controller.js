import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createProjectService,
  getAllProjectsService,
  getProjectBySlugService,
  getAdminProjectsService,
  updateProjectService,
  deleteProjectService,
  togglePublishService,
  toggleFeaturedService,
} from "../services/project.service.js";

/*
=========================================
Create Project
=========================================
*/
export const createProject = asyncHandler(async (req, res) => {
  const project = await createProjectService(req);

  return res.status(201).json(
    new ApiResponse(201, project, "Project created successfully")
  );
});

/*
=========================================
Get All Public Projects
=========================================
*/
export const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await getAllProjectsService();

  return res.status(200).json(
    new ApiResponse(200, projects, "Projects fetched successfully")
  );
});

/*
=========================================
Get Project By Slug
=========================================
*/
export const getProjectBySlug = asyncHandler(async (req, res) => {
  const project = await getProjectBySlugService(req.params.slug);

  return res.status(200).json(
    new ApiResponse(200, project, "Project fetched successfully")
  );
});

/*
=========================================
Admin Get All Projects
=========================================
*/
export const getAdminProjects = asyncHandler(async (req, res) => {
  const projects = await getAdminProjectsService();

  return res.status(200).json(
    new ApiResponse(200, projects, "Projects fetched successfully")
  );
});

/*
=========================================
Update Project
=========================================
*/
export const updateProject = asyncHandler(async (req, res) => {
  const project = await updateProjectService(req);

  return res.status(200).json(
    new ApiResponse(200, project, "Project updated successfully")
  );
});

/*
=========================================
Delete Project
=========================================
*/
export const deleteProject = asyncHandler(async (req, res) => {
  await deleteProjectService(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, null, "Project deleted successfully")
  );
});

/*
=========================================
Toggle Publish
=========================================
*/
export const togglePublish = asyncHandler(async (req, res) => {
  const project = await togglePublishService(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, project, "Project publish status updated")
  );
});

/*
=========================================
Toggle Featured
=========================================
*/
export const toggleFeatured = asyncHandler(async (req, res) => {
  const project = await toggleFeaturedService(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, project, "Project featured status updated")
  );
});