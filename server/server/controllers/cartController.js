const express = require("express");
const mongoose = require('mongoose');
const Cart = require("../models/cart_items");
const Dish = require('../models/dish');
const Restaurant = require('../models/restaurant');

//*******************************************************************//Done
// Get userCart
const getUserCart = async (req, res) => {
    const userId = req.params.userId;

    // Validate userId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send('Invalid userId format');
    }
    try {
        const cart = await Cart.findOne({ userName: mongoose.Types.ObjectId(userId) })
            .populate('dishID') 
            .populate('restaurant'); 

        if (!cart) {
            return res.status(404).send('No cart found for this user');
        }
        res.json(cart);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};

//*******************************************************************//Done
// Add items 
const addItemToCart = async (req, res) => {
    const { dishID } = req.body;
    const { userId } = req.params;


    if (!userId || !dishID) {
        return res.status(400).send('userId or dishID is missing or invalid');
    }

    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(dishID)) {
        return res.status(400).send('Invalid userId or dishID format');
    }

    try {
        let cart = await Cart.findOne({ userName: mongoose.Types.ObjectId(userId) });
        if (!cart) {
            cart = new Cart({
                userName: mongoose.Types.ObjectId(userId),
                dishID: [mongoose.Types.ObjectId(dishID)],
            });
        } else {
            cart.dishID.push(mongoose.Types.ObjectId(dishID));
        }

        await cart.save();
        return res.status(201).json(cart);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        return res.status(500).send(error.message);
    }
};

//*******************************************************************//Done
// Update cart
const updateCart = async (req, res) => {
    const { userId } = req.params;
    const updateData = req.body; 
    try {
        const cart = await Cart.findOneAndUpdate({ userName: userId }, updateData, { new: true });
        if (!cart) {
            return res.status(404).send('Cart is not found !! ');
        }
        res.json(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
//*******************************************************************//Done
// Empty cart
const emptyCart = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userName: userId });
        if (!cart) {
            return res.status(404).send('Cart not found ');
        }
        cart.dishID = []; 
        await cart.save();
        res.send('Cart has been emptied');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getUserCart,
    addItemToCart,
    updateCart,
    emptyCart
};
