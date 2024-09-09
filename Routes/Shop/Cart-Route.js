const express = require("express");
const {
  addToCart,
  fetchCartItems,
  updateCartItemQty,
  deleteCartItem,
} = require("../../Controllers/Shop/Cart-Controller");

const Cart_router = express.Router();

Cart_router.post("/add", addToCart);
Cart_router.get("/get/:userId", fetchCartItems);
Cart_router.put("/update-cart", updateCartItemQty);
Cart_router.delete("/:userId/:productId", deleteCartItem);

module.exports = Cart_router;
