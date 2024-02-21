
const cartController=(req, res)=> { // http://localhost:80/cart?userId=hello
  let data = decodeURI(req.query.userId);
  res.json({you_sayed: data}); // { you_sayed: "hello" }
}

  module.exports = cartController;