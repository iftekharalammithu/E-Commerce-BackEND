const express = require("express");
const { searchProducts } = require("../../Controllers/Shop/Search_Controller");

const Search_router = express.Router();

Search_router.get("/:keyword", searchProducts);

module.exports = Search_router;
