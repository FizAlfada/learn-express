const express = require("express");
const app = express();
const { products } = require("./data");

// homepage
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1> <a href='/api/products'>Products<a/>");
});

// if user hit this endpoint, we send a response json.
app.get("/api/products", (req, res) => {
  // mapping all data, just grab the id, name and the image
  const product = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.send(product);
});

app.listen(5000, () => {
  console.log("This server is listening to port 5000...");
});
