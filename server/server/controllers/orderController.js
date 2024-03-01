
const orderModel = require("../models/order");


//getting order for the user  (get)
const getUserOrders = async (req, res) => {
    const {userID} = req.params
    
    try {
        const ordersForUser = await orderModel.find({userID});
        if (!ordersForUser ) {
          return res.status(404).json({ message: `No orders found for this user ${userID}` });
      }
  
        res.status(200).json(ordersForUser);
      } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// creating user order (Post)
const createOrder = async (req, res) => {
  try{
    const { item, user, deliveryAddress, orderDate,Status, numberOfItems, totalPrice, isDelivered, specialRequest } = req.body ;

    if (!item || !user || !deliveryAddress || !orderDate || !Status || !numberOfItems || !totalPrice || !isDelivered ) {

        return res.status(400).json({ message: `some data is missing ${ req.body }`})
    }

    const newOrder = new orderModel({
      item,
      user,
      deliveryAddress,
      orderDate,
      Status,
      numberOfItems,
      totalPrice,
      isDelivered,
      specialRequest
    });

    await newOrder.save();

    return res.status(200).json({message: "order added successfully"});
}
catch(err){
    return res.status(500).json(err.message);
}
}

// getting order by ID ( get )
const getOrder = async (req, res) => {
    const {orderID} = req.params
    
    try {
        const order = await orderModel.findById(orderID);
        if (!order) {
          res.status(422).json({ message: `this order is not found - ${order}` });
        }
  
        res.status(200).json(order);
      } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// deleting order by ID ( delete )
const deleteOrder = async (req, res) => {
  const { orderID } = req.params;
  try {
      const deletedOrder = await orderModel.findByIdAndDelete(orderID);

      if(!deletedOrder) {
          res.status(422).json({ message: `The Order you are trying to delete is not found - ${deleteOrder}` });
      }
    res.status(200).json({ message: "Order deleted successfully" });
    
  } catch (err) {
      res.status(500).json({ message: err.message });
  }

}

module.exports = {
    getUserOrders,
    createOrder,
    getOrder,
    deleteOrder
};


