const express = require("express");
const productRoutes = require("./routes/product");
const app = express();

app.use(express.json());

app.use("/api/v1", productRoutes);


module.exports = app;