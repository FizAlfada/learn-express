## HTTP METHODS

### GET

Read the data
example.com/order

```js
// Ketika user melakukan request ke root page, maka kita akan mengirikan sesuatu
app.get("/", (req, res) => {
  console.log("User hit the root page");
  res.status(200).send("Home Page"); // secara eksplisit menentukan status code
});
```

### POST

Post the data
example.com/order

### PUT

Update the data
example.com/order/:id

### DELETE

Delete the data
example.com/order/:id

### ALL

example.com/noRouteMatching
Catching all no route matching
