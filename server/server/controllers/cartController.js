const express = require("express");
const Cart = require("../models/cart_items");


// Get user's cart
const getUserCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userName: req.user._id }) 
            .populate('dishID')
            .populate('restaurant');
        if (!cart) {
            return res.status(404).send('Cart not found');
        }
        res.json(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add item to cart
const addItemToCart = async (req, res) => {
    const { dishID } = req.body;
    const { userId } = req.params;
    try {
        let cart = await Cart.findOne({ userName: userId });
        if (!cart) {
            cart = new Cart({
                userName: userId,
                dishID: [dishID], // Starting with the one dish
                // Assuming restaurant is not mandatory or can be derived from the dish
            });
        } else {
            cart.dishID.push(dishID);
        }
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update cart
const updateCart = async (req, res) => {
    const { userId } = req.params;
    const updateData = req.body; 
    try {
        const cart = await Cart.findOneAndUpdate({ userName: userId }, updateData, { new: true });
        if (!cart) {
            return res.status(404).send('Cart not found');
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
            return res.status(404).send('Cart not found');
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
