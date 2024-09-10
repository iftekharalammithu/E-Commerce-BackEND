const express = require("express");
const {
  addAddress,
  fetchAllAddress,
  deleteAddress,
  editAddress,
} = require("../../Controllers/Shop/Address-Controller");

const Address_router = express.Router();

Address_router.post("/add", addAddress);
Address_router.get("/get/:userId", fetchAllAddress);
Address_router.delete("/delete/:userId/:addressId", deleteAddress);
Address_router.put("/update/:userId/:addressId", editAddress);

module.exports = Address_router;
