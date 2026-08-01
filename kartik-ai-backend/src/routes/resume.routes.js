import express from "express";

import {
  uploadResume,
  getResume,
  deleteResume,
} from "../controllers/resume.controller.js";

import uploadResumeMiddleware from "../middleware/pdfUpload.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadResumeMiddleware.single("resume"),
  uploadResume,
);

router.get("/", getResume);

router.delete("/:id", authMiddleware, adminMiddleware, deleteResume);

export default router;
