const isUrlValid = require("url-validation");

const validation = (req, res, next) => {
  const { url } = req.body;
  console.log(isUrlValid(url));
  if (isUrlValid(url)) {
    next();
  } else {
    res.send("Email is not valid!");
  }
};

module.exports = validation;
