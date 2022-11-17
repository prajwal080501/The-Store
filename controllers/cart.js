import Cart from "../models/Cart.js";


export const createCart = async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Cart has been created",
            cart: savedCart
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const updateCart = async (req, res) => {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, { new: true });
    try {
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Cart has been updated",
            cart: updatedCart
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}


export const deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Cart has been deleted",
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const getUserCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// get all users carts

export const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find({});
        res.status(200).json(carts);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const getCartStats = async (req, res) => {
    try {
        const data = await Cart.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$amount" }
                }
            }
        ]);
        res.status(200).json(data[0].total);
    }
    catch (err) {
        res.status(500).json(err);
    }
}


