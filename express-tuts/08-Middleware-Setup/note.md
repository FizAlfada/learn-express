## Middleware Setup

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

```js
// contoh membuat middleware logger
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // jika mau menterminate, gunakan next()
  // jika tanpa next, maka browser akan terus loading / menggantung
  next();
};
```

```js
// menggunakan middleware logger
app.get("/", logger, (req, res) => {
  res.send("Home");
});
```

Every time the app receives a request, it prints the message to the terminal.
