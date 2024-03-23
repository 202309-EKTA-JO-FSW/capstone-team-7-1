const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const passwordValidator = require('password-validator');

const secretKey = process.env.ACCESS_TOKEN_SECRET;

const adminModel = require('../models/admin');
const restaurantsModel = require('../models/restaurant');
const customerModel = require('../models/user');
const dishModel = require('../models/dish');
const orderModel = require("../models/order");
const reviewsModel = require('../models/review');
const favoriteModel = require('../models/fav_restaurant');
const cartModel = require('../models/cart_items');
const blackListedTokensModel = require('../models/blackListedTokens');

const adminController = {};

/*****************************validate password*************/
const validateCriteria = new passwordValidator();
validateCriteria
.is().min(8)
.is().max(70)
.has().uppercase()
.has().lowercase()
.has().digits(2)
.has().not().spaces()
/************************************************************/

adminController.signup = async (req, res) => {
    try{
        const { username, email, password1, password2 } = req.body;

        const emailExistance = await adminModel.findOne({ email: email});
        if(emailExistance){
            return res.status(400).json({message: "email already exists"});
        }
        else if( password1 !== password2 ){
            return res.status(400).json({message: "passwords does not match"});
        }
        else if(!(validateCriteria.validate(password1))){
            return res.status(400).json({message: "password does not follow the requied criteria,\n minimum 8 letters or numbers \n must have uppercase and at least 2 numbers"})
        }

        const hashedPassword = await bcrypt.hash(password1, 10);

        await adminModel.create({
            username,
            email,
            hashedPassword,
        });

        const admin = await adminModel.findOne({email: email}, {});

        const content = {
            id: admin._id,
        };

        const accessToken = jwt.sign(content, secretKey, {expiresIn: "1h"});
        res.status(200).json({accessToken: accessToken});
        //res.redirect()
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.signin = async (req, res) => {
    try{
        const { email, password, rememberMe } = req.body;

        const admin = await adminModel.findOne({email: email});

        if(!admin){
            return res.status(400).json({message: "admin does not exist"})
        }
        const hashedPassword = await bcrypt.compare(password, admin.hashedPassword);

        if(!hashedPassword){
            return res.status(400).json({message: "password Incorrect"});
        }

        const content = {
            id: admin._id
        }

        const accessToken = jwt.sign(content, secretKey, {expiresIn: "1h"});
        res.status(200).json({accessToken: accessToken});
        //res.redirect()
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.signout = async (req, res) => {
    try{
        const token = await req.headers['authorization']?.split(' ')[1];
        await blackListedTokensModel.create({ token: token });
        res.status(200).json({message: "signed out successfully"})
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.addRestaurant = async (req, res) => {
    try{
        const { name, restaurantAddress, openingHours, closingHours, logo, rate, description, phone, cuisineType } = req.body;

        if( !name || !restaurantAddress || !openingHours || !description || !phone || !cuisineType ){
            return res.status(400).json({message: "some data is missing"})
        }

        await restaurantsModel.create({
            name,
            restaurantAddress,
            openingHours,
            description,
            phone,
            cuisineType,
            closingHours,
            logo,
            rate
        });

        return res.status(200).json({message: "restaurant added successfully"});
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantsModel.find({});

        res.status(200).json(restaurants);
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.ubdateRestaurant = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, restaurantAddress, openingHours, closingHours,description, rate,logo, phone, cuisineType } = req.body;

        if(!id){
            return res.status(400).json({message: "restaurant id is required"});
        }

        const restaurant = await restaurantsModel.findById(id);

        if(!restaurant){
            return res.status(400).json({message: "restaurant not found"});
        }

        if(name) restaurant.name = name;
        if(restaurantAddress) restaurant.restaurantAddress = restaurantAddress;
        if (openingHours) restaurant.openingHours = openingHours;
        if (closingHours) restaurant.closingHours = closingHours;
        if (rate) restaurant.rate = rate;
        if (description) restaurant.description = description;
        if(phone) restaurant.phone = phone;
        if(cuisineType) {
            const newcusine = restaurant.cuisineType.concat(cuisineType);
            restaurant.cuisineType = newcusine;
        }
        if (logo) restaurant.logo = logo;

        await restaurant.save();

        res.status(200).json({message: "restaurant details updated successfully", restaurant})
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.removeRestaurant = async (req, res) => {
    try{
        const { id } = req.params;

        if(!id){
            return red.status(400).json({message: "id is required"});
        }

        const restaurant = await restaurantsModel.findByIdAndDelete(id);

        res.status(200).json({message: "restaurant deleted successfully"});
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.addDish = async (req, res) => {
    try{
        const { name,  description, price, ingrediants, category, restaurant,image } = req.body;


        if( !name || !description || !price || !ingrediants || !category || !restaurant){
            return res.status(400).json({message: "some data not entered"})
        }

        await dishModel.create({
            name,
            description,
            price,image,
            ingrediants,

            category,
            restaurant,
        });

        res.status(200).json({message: "dish added successfully"});
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.getAllDishes = async (req, res) => {
    try {
        const dishes = await dishModel.find({});

        res.status(200).json(dishes);
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.updateDish = async (req, res) => { 
    try{
        const { id } = req.params;
        const { name,  description, price, ingrediants, category, restaurant,image } = req.body;


        if(!id){
            return res.status(400).json({message: "dish id is required"});
        }

        const dish = await dishModel.findById(id);

        if(!dish){
            return res.status(400).json({message: "dish not found"});
        }

        if(name) dish.name = name;
        if(description) dish.description = description;
        if (price) dish.price = price;
        if(image) dish.image = image;

        if(ingrediants){
            const newIngrediants = dish.ingrediants.concat(ingrediants);

        }
        if(category){
            const newCategory = dish.category.concat(category);
            dish.category = newCategory;
        }
        if(restaurant) dish.restaurant = restaurant;

        await dish.save();

        res.status(200).json({message: "dish updated successfully", dish})
    }
    catch(err){
        res.status(400).json(err.message);
    }
};

adminController.removeDish = async (req, res) => {
    try{
        const { id } = req.params;

        if(!id){
            return red.status(400).json({message: "id is required"});
        }

        const dish = await dishModel.findByIdAndDelete(id);

        res.status(200).json({message: "dish deleted successfully"});
    }
    catch(err){
        res.status(400).json(err.message);
    }
}

adminController.findRestaurantById = async (req, res) => {
    try{
        const { id } = req.params;

        if(!id){
            return res.status(400).json({message: "id not found"})
        }

        const restaurant = await restaurantsModel.findById(id);
        res.status(200).json(restaurant);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

module.exports = adminController;