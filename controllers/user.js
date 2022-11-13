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