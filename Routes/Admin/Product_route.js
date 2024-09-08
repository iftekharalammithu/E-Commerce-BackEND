const express = require("express");

const {
  handleImageUpload,
  addProduct,
  editProduct,
  deleteProduct,
  fetchAllProducts,
} = require("../../Controllers/Admin/Product_Controller");
const { upload } = require("../../Helper/Cloudinary");

const adminProductsRouter = express.Router();

adminProductsRouter.post(
  "/upload-image",
  upload.single("my_file"),
  handleImageUpload
);
adminProductsRouter.post("/add", addProduct);
adminProductsRouter.put("/edit/:id", editProduct);
adminProductsRouter.delete("/delete/:id", deleteProduct);
adminProductsRouter.get("/get", fetchAllProducts);

module.exports = adminProductsRouter;
