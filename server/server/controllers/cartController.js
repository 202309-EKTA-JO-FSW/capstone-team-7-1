const express = require("express");
const Cart = require("../models/cart_items");
const mongoose = require('mongoose');


// Get user's cart

const getUserCart = async (req, res) => {
    const userId = req.params.userId;
    try {
        const cart = await Cart.findOne({ userName: userId}) 
            .populate('dishID')
            .populate('restaurant');
        if (!cart) {
            return res.status(404).send('Cart is not found');
        }
        res.json(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//*******************************************************************//
const addItemToCart = async (req, res) => {
    const { dishID } = req.body;
    const { userId } = req.params;

    console.log("UserID:", userId);
    console.log("DishID:", dishID);

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

//*******************************************************************//
// Update cart
const updateCart = async (req, res) => {
    const { userId } = req.params;
    const updateData = req.body; 
    try {
        const cart = await Cart.findOneAndUpdate({ userName: userId }, updateData, { new: true });
        if (!cart) {
            return res.status(404).send('Cart not found hakeema');
        }
        res.json(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Empty cart
const emptyCart = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userName: userId });
        if (!cart) {
            return res.status(404).send('Cart not found mais');
        }
        cart.dishID = []; // Remove all items from the cart
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
