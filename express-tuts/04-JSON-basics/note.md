### res.json(response)

Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.

```js
app.get("", (req, res) => {
  res.json(products);
  res.json([{ name: "John" }, { name: "Jack" }]);
  res.status(500).json({ error: "message" });
});
```
