const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
} = require("../../Controllers/Auth/Auth_Controller");

const Auth_router = express.Router();

Auth_router.post("/register", registerUser);
Auth_router.post("/login", loginUser);
Auth_router.post("/logout", logoutUser);
Auth_router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = Auth_router;
