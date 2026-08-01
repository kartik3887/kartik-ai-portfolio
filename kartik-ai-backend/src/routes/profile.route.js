import express from "express"
import { createProfileController, getProfileController, updateProfileController } from "../controllers/profile.controller.js"
import uploadFile from "../middleware/upload.middleware.js"

import { authMiddleware } from "../middleware/auth.middleware.js"
import { adminMiddleware } from "../middleware/admin.middleware.js"


const router = express.Router()

router.get('/', getProfileController)
router.post('/', uploadFile.single("profileImage"), createProfileController)
router.patch('/', uploadFile.single("profileImage"), updateProfileController)
export default router