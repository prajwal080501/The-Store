import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import cors from "cors"
import userRoutes from "./routes/user.js";
import stripeRoutes from "./routes/stripe.js";

dotenv.config({
    path: './.env.local',
});

dotenv.config();
const app = express();
app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/checkout", stripeRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};


app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
}

);


