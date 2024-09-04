const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { mongoDB_connection } = require("./Utils/MongoDB_Connect");

const app = express();

const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cahe-Control",
      "X-Requested-With",
      "Expires",
      "Pragma",
    ],
    
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  mongoDB_connection();
  console.log(`Server started on port ${port}`);
});
