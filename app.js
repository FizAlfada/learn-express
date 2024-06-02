const express = require("express");
const app = express();
const { products } = require("./data");

app.get("", (req, res) => {
  // mengirimkan response yang nanti datanya bisa digunakan
  res.json(products);
});

app.listen(5000, () => {
  console.log("This server running on port 5000...");
});
