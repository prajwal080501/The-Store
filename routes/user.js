import express from "express";
import { verifyToken, verifyTokenAndAuthorization } from "../helpers/verifyToken.js";
import User from "../models/User.js";
import {deleteUser, updateUser} from "../controllers/user.js";
const router = express.Router();

router.put("/:id",  verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
export default router;