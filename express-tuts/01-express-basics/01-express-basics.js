const express = require("express");
const app = express();

// Ketika user melakukan request ke root page, maka kita akan mengirikan sesuatu
app.get("/", (req, res) => {
  console.log("User hit the root page");
  res.status(200).send("Home Page"); // secara eksplisit menentukan status code
});

// Ketika user melakukan request ke about page, maka kita akan mengirikan sesuatu
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// ketika tidak ada matching route, maka akan ditangkap di all method
app.all("*", (req, res) => {
  res.status(404).send("<h1>No matching route</h1>");
});

// menandakan bahwa app ini berjalan di port 5000
app.listen(5000, () => {
  console.log(`Server is listening to port 5000...`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.listen
