
const orderModel = require("../models/order");


//getting order for the user  (get)
const getUserOrders = async (req, res) => {
    const {userID} = req.params
    
    try {
        const ordersForUser = await orderModel.find({
          user: userID
        });
        if (!ordersForUser) {
          res.status(422).json({ message: "No orders found for this user" });
        }
  
        res.status(200).json(orders);
      } catch (err) {
        res.status(422).json({ message: err.message });
    }
}


// creating user order (Post)
const createOrder = async (req, res) => {
    
}

// getting order by ID ( get )
const getOrder = async (req, res) => {
    const {orderID} = req.params
    
    try {
        const order = await orderModel.find({
          order: orderID
        });
        if (!order) {
          res.status(422).json({ message: "this order is not found" });
        }
  
        res.status(200).json(order);
      } catch (err) {
        res.status(422).json({ message: err.message });
    }
}

// deleting order by ID ( delete )
const deleteOrder = async (req, res) => {
    
}

module.exports = {
    getUserOrders,
    createOrder,
    getOrder,
    deleteOrder
};


