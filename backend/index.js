const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

app.use(cors());
app.use(express.json());
dotenv.config({path:".env"});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected DB"))
  .catch((err) => console.log("error:", err));

app.listen(5000, () => {
  console.log("server started successfully at port:", 5000);
});

// 6mlTOf9c1s5tyD7a
