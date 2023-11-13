const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  const { tokenId, amount } = req.body;
  console.log(req.body);
  stripe.charges.create(
    {
      source: tokenId,
      amount,
      currency: "USD",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.error("Stripe Error:", stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json("hi");
      }
    }
  );
});

module.exports = router;
