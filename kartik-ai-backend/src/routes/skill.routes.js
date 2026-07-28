import express from "express";

import {
  createSkill,
  getAllSkills,
  getAdminSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
  togglePublishSkill,
} from "../controllers/skill.controller.js";

import {authMiddleware }from "../middleware/auth.middleware.js";
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
  getAdminSkills
);

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("icon"),
  createSkill
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("icon"),
  updateSkill
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteSkill
);

router.patch(
  "/:id/publish",
  authMiddleware,
  adminMiddleware,
  togglePublishSkill
);

/*
=========================================
Public Routes
=========================================
*/

router.get("/", getAllSkills);

router.get("/:id", getSkillById);

export default router;