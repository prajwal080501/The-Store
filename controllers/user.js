import User from './../models/User.js';
import bcrypt from 'bcryptjs';

export const updateUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);

    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Account has been updated",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin
            }
        });

    }
    catch (err) {
        res.status(500).json(err);
    }
}


export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "Account has been deleted",
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

export const getAllUsers = async (req, res) => {
    const query = req.query.new;

    const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
    try {
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
}


export const getUserStats = async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
