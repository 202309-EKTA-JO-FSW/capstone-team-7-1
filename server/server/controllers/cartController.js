
// const cartController=(req, res)=> { // http://localhost:80/cart?userId=hello
//   let data = decodeURI(req.query.userId);
//   res.json({you_sayed: data}); // { you_sayed: "hello" }
// }
// app.get('/cart', cartController);



const cartController = {
  // Retrieve a user's cart
  getUserCart: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const userCart = await cart_items.findOne({ user: userId }).populate('items');
      res.json(userCart);
    } catch (error) {
      next(error);
    }
  },
}

  module.exports = cartController;