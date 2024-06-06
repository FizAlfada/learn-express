const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // jika mau menterminate, gunakan next()
  // jika tanpa next, maka browser akan terus loading
  next();
};

module.exports = logger;
