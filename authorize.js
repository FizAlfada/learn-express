const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "john") {
    // create a new req.user
    req.user = {
      name: "john",
      age: 23,
    };
    next();
  } else {
    res.status(401).send("Unauthorized");
    next();
  }
};

module.exports = authorize;
