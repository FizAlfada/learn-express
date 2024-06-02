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

// get the single product
app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params);

  const { productID } = req.params;
  // console.log(productID);

  // mencari id yang sama dengan productID
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  // if there is no productID match
  if (!singleProduct) return res.send("Product doesn't exist");

  // jika ditemukan, kirimkan semua datanya
  return res.send(singleProduct);
});

app.listen(5000, () => {
  console.log("This server is listening to port 5000...");
});
