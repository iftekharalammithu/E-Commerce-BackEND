const express = require("express");
const {
  addFeatureImage,
  getFeatureImages,
} = require("../../Controllers/Shop/Feature_Controller");

const FeatureRouter_router = express.Router();

FeatureRouter_router.post("/add", addFeatureImage);
FeatureRouter_router.get("/get", getFeatureImages);

module.exports = FeatureRouter_router;
