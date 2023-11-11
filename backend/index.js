const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected DB"))
  .catch((err) => console.log("error:", err));

app.listen(5000, () => {
  console.log("server started successfully at port:", 5000);
});

// 6mlTOf9c1s5tyD7a
