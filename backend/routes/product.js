const express = require("express");
const { getAllProducts, createProduct, deleteProduct, updateProduct, getProductDetails } = require("../controllers/product");

const router = express.Router();

router.route("/all").get(getAllProducts);
router.route("/create").post(createProduct);
router.route("/update/:id").put(updateProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/:id").get(getProductDetails);

module.exports = router;