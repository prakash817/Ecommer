const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//sign up
router.post("/register", async (req, res) => {
  const encryptedPassword = CryptoJS.AES.encrypt(
    req.body.password,
    "1234"
  ).toString();
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: encryptedPassword,
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json("Wrong Credential !");
      return;
    }

    const originalPassword = CryptoJS.AES.decrypt(
      user.password,
      "1234"
    ).toString(CryptoJS.enc.Utf8);

    if (originalPassword != req.body.password) {
      res.status(404).json("Wrong Credential !");
      return;
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...other } = user._doc;
    res.status(200).json({ ...other, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
