import Product from './../models/Product.js';
import bcrypt from 'bcryptjs';


export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Product has been created",
            product: savedProduct
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const updateProduct = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, { new: true });
    try {
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Product has been updated",
            product: updatedProduct
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}


export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Product has been deleted",
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                status: "error",
                code: 404,
                msg: "Product not found",
            });
        }
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const getAllProducts = async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    const querySearch = req.query.search;
    try {
        let products;
        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        }
        else if (querySearch) {
            products = await Product.find({
                title: {
                    $regex: querySearch,
                    $options: "i"
                }
            });
        }
        else if (queryCategory) {
            products = await Product.find({
                categories: {
                    $in: [queryCategory]
                }
            });
        }
        else {
            products = await Product.find();
        }
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// function to get random products on every page load
export const getRandProducts = async (req, res) => {
    try {
        const products = await Product.aggregate([{ $sample: { size: 8 } }]);
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
}


