const e = require("express");
const Product = require("../models/Product");
const ErrorHander = require("../utils/errorhander");
const createError = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// create new product - Admin
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    }
)

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        console.log(error);
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        // use errorhander to handle error
        const product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander('Product not found', 404));
        }
        await product.remove();
        res.status(200).json({
            success: true,
            message: "Product deleted"
        });
    } catch (error) {
        console.log(error);
    }
}
// update product
exports.updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate({
            _id: req.params.id
        }, req
            .body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        res.status(200).json({
            success: true,
            updatedProduct
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getProductDetails = async (req, res, next) => {

        const product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander('Product not found', 404));
        }
};