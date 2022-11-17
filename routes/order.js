import express from 'express';
import { createOrder, deleteOrder, getAllOrders, getMonthlyIncome, getUserOrder, updateOrder } from '../controllers/order.js';
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../helpers/verifyToken.js';

const router = express.Router();

router.post("/create", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAuthorization, updateOrder);
router.delete("/:id", verifyTokenAndAuthorization, deleteOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);



export default router;