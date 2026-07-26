import express from "express";

import {
  createContact,
  getAllContacts,
  deleteContact,
  updateContactStatus
} from "../controllers/contact.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", authMiddleware, adminMiddleware, getAllContacts);

router.delete("/:id", authMiddleware, adminMiddleware, deleteContact);

router.patch("/:id", authMiddleware, adminMiddleware, updateContactStatus);
export default router;
