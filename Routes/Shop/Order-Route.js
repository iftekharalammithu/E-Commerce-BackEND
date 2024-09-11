const express = require("express");
const {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
} = require("../../Controllers/Shop/Order_Controller");

const Order_router = express.Router();

Order_router.post("/create", createOrder);
Order_router.post("/capture", capturePayment);
Order_router.get("/list/:userId", getAllOrdersByUser);
Order_router.get("/details/:id", getOrderDetails);

module.exports = Order_router;
