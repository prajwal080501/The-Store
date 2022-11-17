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
        type: Array,
    },
    color: {
        type: Array,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 0,
    },

}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;