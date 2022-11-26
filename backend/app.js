const express = require("express");
const productRoutes = require("./routes/product");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

// middleware for error handling

app.use("/api/v1/products", productRoutes);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorMiddleware);

module.exports = app;