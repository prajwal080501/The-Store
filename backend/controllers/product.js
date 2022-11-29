const e = require("express");
const Product = require("../models/Product");
const ErrorHander = require("../utils/errorhander");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/features");
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
exports.getAllProducts = catchAsyncErrors(
    async (req, res, next) => {
        const feature = new Features(Product.find(), req.query).search();
        const products = await feature.query;
        res.status(200).json({
            success: true,
            products
        });
    }
)
exports.deleteProduct = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander('Product not found', 404));
        }
        await product.remove();
        res.status(200).json({
            success: true,
            message: "Product deleted"
        });
    }
)
// update product
exports.updateProduct = catchAsyncErrors(
    async (req, res, next) => {
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
    }
)

exports.getProductDetails = catchAsyncErrors(
    async (req, res, next) => {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander('Product not found', 404));
        }
        res.status(200).json({
            success: true,
            product
        });
    }
)