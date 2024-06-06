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

// Params - extra info
// sometimes query is compleks
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  // destructure query nya
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched");
    res.status(200).json({
      success: true,
      data: [],
    });
  }

  res.send(sortedProducts);
});

app.listen(5000, () => {
  console.log("This server is listening to port 5000...");
});
