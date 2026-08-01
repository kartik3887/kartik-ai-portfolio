import express from "express";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

import { getDashboardStats } from "../controllers/dashboard.controller.js";

const router = express.Router();

/*
=========================================
Admin Dashboard Stats
=========================================
*/

router.get(
    "/",
    authMiddleware,
    adminMiddleware,
    getDashboardStats
);

export default router;