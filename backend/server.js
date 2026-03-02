require("dotenv").config();
console.log("KEY_ID:", process.env.KEY_ID);
console.log("KEY_SECRET:", process.env.KEY_SECRET);
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

// Create Order API
app.post("/create-order", async (req, res) => {
  try {

    console.log("Body received:", req.body);

    const { amount } = req.body;

    console.log("Amount received:", amount);

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(order);

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
// Verify Payment
app.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ status: "Payment Verified" });
  } else {
    res.status(400).json({ status: "Verification Failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});