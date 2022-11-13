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


// export const deleteUser = async (req, res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id);
//         res.status(200).json({
//             status: "success",
//             code: 200,
//             msg: "Account has been deleted",
//         });
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// }

// export const getUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         const { password, ...other } = user._doc;
//         res.status(200).json(other);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// }

// export const getAllUsers = async (req, res) => {
//     const query = req.query.new;

//     const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
//     try {
//         res.status(200).json(users);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// }


// export const getUserStats = async (req, res) => {
//     const today = new Date();
//     const latYear = today.setFullYear(today.setFullYear() - 1);

//     try {
//         const data = await User.aggregate([
//             {
//                 $project: {
//                     month: { $month: "$createdAt" }
//                 }
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 }
//                 }
//             }
//         ]);
//         res.status(200).json(data);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// }
