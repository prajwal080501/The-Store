import express from 'express';
import { createProduct, updateProduct } from '../controllers/product.js';
import { verifyTokenAndAdmin } from '../helpers/verifyToken.js';

const router = express.Router();


router.post("/create", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);


export default router;