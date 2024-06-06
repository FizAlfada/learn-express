const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// ketika menentukan pathnya, path yang setelah itu akan terbaca oleh logger
// app.use("/api", logger);

// memakai 2 atau lebih middleware dengan menggunakan array
app.use([logger, authorize]);

// logger middleware
app.get("/", (req, res) => {
  res.send("Home");
});

// logger bisa ditaro di endpoint mana aja
app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  // req.user telah dibikin di file authorize.js
  console.log(req.user);
  res.send("Contact");
});

// app.get("/api/home", (req, res) => {
//   res.send("Contact");
// });

app.listen(5000, () => {
  console.log("This server is listening to port 5000...");
});
