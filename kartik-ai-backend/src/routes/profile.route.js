import express from "express";
import {
    createProfileController,
    getProfileController,
    updateProfileController,
} from "../controllers/profile.controller.js";

import uploadFile from "../middleware/upload.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = express.Router();

// Public
router.get("/", getProfileController);

// Admin Only
router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    uploadFile.single("profileImage"),
    createProfileController
);

router.patch(
    "/",
    authMiddleware,
    adminMiddleware,
    uploadFile.single("profileImage"),
    updateProfileController
);

export default router;