const express = require('express');


const favRestaurantModel = require('../models/fav_restaurant');
const favDishModel = require('../models/fav_dishes');

const favoriteController = {};

favoriteController.getUserFavoriteRestaurants = async (req, res) => {
    try {
        const userId = req.params.userId;
        const favorites = await favRestaurantModel.find({ user: userId }).populate('restaurant');
        res.status(200).json(favorites);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

favoriteController.addFavoriteRestaurant = async (req, res) => {
    try {
        const userId = req.params.userId;
        const restaurantId = req.body.restaurantId;

        if( !restaurantId ){
            return res.status(400).json({message: "restaurant ID is missing"})
        }

        await favRestaurantModel.create({
            user: userId,
            restaurant: restaurantId
        });
        res.status(200).json({message: "restaurant added to favorites successfully"});
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

favoriteController.removeFavoriteRestaurant = async (req, res) => {
    try {
        const userId = req.params.userId;
        const restaurantId = req.params.restaurantId;
        await favRestaurantModel.findOneAndDelete({ user: userId, restaurant: restaurantId });
        res.status(200).json({message: "restaurant removed from favorites"});
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

favoriteController.getUserFavoriteDishes = async (req, res) => {
    try {
        const userId = req.params.userId;
        const favorites = await favDishModel.find({ user: userId }).populate('dishes');
        res.status(200).json(favorites);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

favoriteController.addFavoriteDish = async (req, res) => {
    try {
        const userId = req.params.userId;
        const dishId = req.body.dishId;

        if( !dishId ){
            return res.status(400).json({message: "dish ID is missing"})
        }

        await favDishModel.create({
            user: userId,
            dishes: dishId
        });
        res.status(200).json({message: "dish added to favorites successfully"});
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

favoriteController.removeFavoriteDish = async (req, res) => {
    try {
        const userId = req.params.userId;
        const dishId = req.params.dishId;
        await favDishModel.findOneAndDelete({ user: userId, dishes: dishId });
        res.status(200).json({message: "dish removed from favorites"});
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = favoriteController;