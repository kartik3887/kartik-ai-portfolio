import express from "express";

import {
  createProject,
  getAllProjects,
  getProjectBySlug,
  getAdminProjects,
  updateProject,
  deleteProject,
  togglePublish,
  toggleFeatured,
} from "../controllers/project.controller.js";

import {authMiddleware} from "../middleware/auth.middleware.js";
import {adminMiddleware} from "../middleware/admin.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

/*
=========================================
Admin Routes
=========================================
*/

router.get(
  "/admin/all",
  authMiddleware,
  adminMiddleware,
  getAdminProjects
);

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createProject
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  updateProject
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteProject
);

router.patch(
  "/:id/publish",
  authMiddleware,
  adminMiddleware,
  togglePublish
);

router.patch(
  "/:id/featured",
  authMiddleware,
  adminMiddleware,
  toggleFeatured
);

/*
=========================================
Public Routes
=========================================
*/

router.get("/", getAllProjects);

router.get("/:slug", getProjectBySlug);

export default router;