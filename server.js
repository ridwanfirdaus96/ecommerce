// sk_test_51HWLYSI7H6155Bk9NWsrJOr54TLJcgi79EdUHWu3hR9MOfELWKSekum2UJr8AdCLKiZtWpLSQyHM1BXzFRlLtWLg00UtIAKYaz
// Coffee: price_1NvAJqI7H6155Bk9EBBk3uJm
// Sunglasses: price_1NvAKuI7H6155Bk94MnzT6mh
// Camera: price_1NvALmI7H6155Bk9mBScQ27W
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HWLYSI7H6155Bk9NWsrJOr54TLJcgi79EdUHWu3hR9MOfELWKSekum2UJr8AdCLKiZtWpLSQyHM1BXzFRlLtWLg00UtIAKYaz"
);

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

app.listen(4000, () => console.log("listening on port 4000"));
