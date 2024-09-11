const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { mongoDB_connection } = require("./Utils/MongoDB_Connect");
const Auth_router = require("./Routes/Auth/Auth_Route");
const adminProductsRouter = require("./Routes/Admin/Product_route");
const Product_router = require("./Routes/Shop/Product-Routes");
const Cart_router = require("./Routes/Shop/Cart-Route");
const Address_router = require("./Routes/Shop/Address-Route");
const Order_router = require("./Routes/Shop/Order-Route");

const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
  })
);
// app.use(
//   cors({
//     origin: "http://localhost:5000", // Replace with your frontend origin
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization", "cache-control"],
//     credentials: true, // Allow credentials
//   })
// );

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", Auth_router);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/products", Product_router);
app.use("/api/shop/cart", Cart_router);
app.use("/api/shop/address", Address_router);
app.use("/api/shop/order", Order_router);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  mongoDB_connection();
  console.log(`Server started on port ${port}`);
});
