import User from "../models/User.js";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const Register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                status: "error",
                code: 400,
                msg: "User already exists"

            });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        user = new User({
            username: username,
            email: email,
            password: hashedPassword
        });
        await user.save();
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}


export const Login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({
            status: "error",
            code: 400,
            msg: "User does not exist"
        });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(400).json({
            status: "error",
            code: 400,
            msg: "Invalid Credentials"
        });
    }
    const payload = {
        user: {
            id: user._id,
            isAdmin: user.isAdmin,
            username: user.username,
            email: user.email
        }
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({
            status: "success",
            code: 200,
            msg: "User logged in successfully",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                isAdmin: user.isAdmin,
                email: user.email
            }
        });
    });
}
