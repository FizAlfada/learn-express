const express = require("express");
const path = require("path");

const app = express();

// mengirim file yang tidak akan dirubah di server
// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // ketika user mengakses home page, kita mengirim file index html
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("No Route Matching");
});

app.listen(5000, () => {
  console.log(`The server is running on port 5000...`);
});
