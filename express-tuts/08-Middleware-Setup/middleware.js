const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // jika mau menterminate, gunakan next()
  // jika tanpa next, maka browser akan terus loading
  next();
};

// tanpa function tambahan
// app.get("/", (req, res) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   res.send("Home");
// });

// logger middleware
app.get("/", logger, (req, res) => {
  res.send("Home");
});

// logger bisa ditaro di endpoint mana aja
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("This server is listening to port 5000...");
});
