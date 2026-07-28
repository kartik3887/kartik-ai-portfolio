import slugify from "slugify";

import Project from "../models/Project.js";
import ApiError from "../utils/ApiError.js";

import {
  uploadFile,
  replaceFile,
  deleteFile,
} from "./cloudinary.service.js";

/*
=========================================
Create Project
=========================================
*/
export const createProjectService = async (req) => {
  const {
    title,
    description,
    techStack,
    github,
    liveDemo,
    featured,
    order,
    isPublished,
  } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and description are required");
  }

  const slug = slugify(title, {
    lower: true,
    strict: true,
  });

  const existingProject = await Project.findOne({ slug });

  if (existingProject) {
    throw new ApiError(409, "Project already exists");
  }

  let image = {
    url: "",
    public_id: "",
  };

  if (req.file) {
    image = await uploadFile(req.file, "kartik-ai/projects");
  }

  const parsedTechStack = techStack
    ? JSON.parse(techStack)
    : [];

  const project = await Project.create({
    title,
    slug,
    description,
    techStack: parsedTechStack,
    github,
    liveDemo,
    featured,
    order,
    isPublished,
    image,
  });

  return project;
};

/*
=========================================
Get All Public Projects
=========================================
*/
export const getAllProjectsService = async () => {
  return await Project.find({
    isPublished: true,
  }).sort({
    order: 1,
    createdAt: -1,
  });
};

/*
=========================================
Get Project By Slug
=========================================
*/
export const getProjectBySlugService = async (slug) => {
  const project = await Project.findOne({
    slug,
    isPublished: true,
  });

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return project;
};

/*
=========================================
Admin Get All Projects
=========================================
*/
export const getAdminProjectsService = async () => {
  return await Project.find().sort({
    order: 1,
    createdAt: -1,
  });
};

/*
=========================================
Update Project
=========================================
*/
export const updateProjectService = async (req) => {
  const { id } = req.params;

  const project = await Project.findById(id);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  const data = {
    ...req.body,
  };

  if (data.techStack) {
    data.techStack = JSON.parse(data.techStack);
  }

  if (data.title) {
    data.slug = slugify(data.title, {
      lower: true,
      strict: true,
    });

    const existing = await Project.findOne({
      slug: data.slug,
      _id: { $ne: id },
    });

    if (existing) {
      throw new ApiError(409, "Project already exists");
    }
  }

  if (req.file) {
    data.image = await replaceFile(
      project.image?.public_id,
      req.file,
      "kartik-ai/projects"
    );
  }

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);
  console.log("DATA:", data);

  

  const updatedProject = await Project.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  return updatedProject;
};


/*
=========================================
Delete Project
=========================================
*/
export const deleteProjectService = async (id) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  if (project.image?.public_id) {
    await deleteFile(project.image.public_id);
  }

  await project.deleteOne();

  return true;
};

/*
=========================================
Toggle Publish
=========================================
*/
export const togglePublishService = async (id) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  project.isPublished = !project.isPublished;

  await project.save();

  return project;
};

/*
=========================================
Toggle Featured
=========================================
*/
export const toggleFeaturedService = async (id) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  project.featured = !project.featured;

  await project.save();

  return project;
};