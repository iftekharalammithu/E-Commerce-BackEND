const express = require("express");
const {
  getFilteredProducts,
  getProductDetails,
} = require("../../Controllers/Shop/Product-Controller.js");

const Product_router = express.Router();

Product_router.get("/get", getFilteredProducts);
Product_router.get("/get/:id", getProductDetails);

module.exports = Product_router;
