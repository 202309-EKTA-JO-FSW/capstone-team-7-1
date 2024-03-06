const express = require('express');

const favRestaurantModel = require('../models/fav_restaurant');
const favDishModel = require('../models/fav_dishes');
const Restaurant = require('../models/restaurant');


const favoriteController = {};

//*****************************************************************//.....done

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

//*****************************************************************// .....done
favoriteController.addFavoriteRestaurant = async (req, res) => {
    try {
        const { userId, restaurantId } = req.body; // Destructure userId and restaurantId from the request body

        // Ensure both userId and restaurantId are provided
        if (!userId || !restaurantId) {
            return res.status(400).json({ message: "userId or restaurantId is missing" });
        }

        // Create a new favorite restaurant document
        const favorite = await favRestaurantModel.create({
            user: userId, // Ensure this matches the 'user' field in your schema
            restaurant: [restaurantId], // Since 'restaurant' is an array in your schema
        });

        res.status(200).json({ message: "Restaurant added to favorites successfully", favorite });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//*****************************************************************//.....done

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

//*****************************************************************//.....done


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
//*****************************************************************//.....done

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

//*****************************************************************//.....done
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