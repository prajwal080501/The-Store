import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, getRandProducts, updateProduct } from '../controllers/product.js';
import { verifyTokenAndAdmin } from '../helpers/verifyToken.js';

const router = express.Router();


router.post("/create", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/:id", getProduct);
router.get("/", getAllProducts);
router.get("/random", getRandProducts);


export default router;