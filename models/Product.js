import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },

}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;