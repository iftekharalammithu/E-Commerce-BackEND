const express = require("express");
const {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} = require("../../Controllers/Admin/Order-Controller");

const Admin_Order_router = express.Router();

Admin_Order_router.get("/get", getAllOrdersOfAllUsers);
Admin_Order_router.get("/details/:id", getOrderDetailsForAdmin);
Admin_Order_router.put("/update/:id", updateOrderStatus);

module.exports = Admin_Order_router;
