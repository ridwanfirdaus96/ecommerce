import dotenv from "dotenv";
import express from "express";
dotenv.config();
import cors from "cors";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3,
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

// app.listen(3000, () => console.log("listening on port 3000"));
