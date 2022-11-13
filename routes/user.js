import express from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../helpers/verifyToken.js";
import User from "../models/User.js";
import { deleteUser, updateUser, getUser, getAllUsers, getUserStats } from "../controllers/user.js";
const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/stats", verifyTokenAndAdmin, getUserStats);
export default router;