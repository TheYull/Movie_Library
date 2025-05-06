import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import requireAdmin from "../middleware/requireAdmin.js";
import { getAllUsers } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", verifyToken, requireAdmin, getAllUsers);

export default router;
