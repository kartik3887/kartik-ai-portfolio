import express from "express";

import {
    createExperience,
    getAllExperience,
    getAdminExperience,
    getExperienceById,
    updateExperience,
    deleteExperience,
    togglePublishExperience,
} from "../controllers/experience.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
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
    getAdminExperience
);

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    upload.single("companyLogo"),
    createExperience
);

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    upload.single("companyLogo"),
    updateExperience
);

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteExperience
);

router.patch(
    "/:id/publish",
    authMiddleware,
    adminMiddleware,
    togglePublishExperience
);

/*
=========================================
Public Routes
=========================================
*/

router.get("/", getAllExperience);

router.get("/:id", getExperienceById);

export default router;