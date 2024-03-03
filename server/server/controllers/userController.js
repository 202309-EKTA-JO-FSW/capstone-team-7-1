const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const passwordValidator = require('password-validator');

const secretKey = process.env.ACCESS_TOKEN_SECRET;

const userModel = require('../models/user');
// const restaurantsModel = require('../models/restaurant');
// const dishModel = require('../models/dish');
// const orderModel = require("../models/order");
// const reviewsModel = require('../models/review');
// const favoriteModel = require('../models/fav_restaurant');
// const cartModel = require('../models/cart_items');
const blackListedTokensModel = require('../models/blackListedTokens');

const userController= {};

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

 userController.signup = async (req, res) => {
  try {
      const { userName, email, password,password1, profilePicture, gender, address, phone } = req.body;

      // Check for existing user
      const existingUser = await userModel.findOne({ email: email });
      if (existingUser) {
          return res.status(400).json({message: "User already exists"});
      }

      else if( password !== password1 ){
        return res.status(400).json({message: "passwords does not match"});
    }

      else if(!(validateCriteria.validate(password))){
          return res.status(400).json({message: "Password does not meet criteria,\n minimum 8 letters or numbers \n must have uppercase and at least 2 numbers"});
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await userModel.create({
          userName,
          email,
          hashedPassword, // Store the hashed password
          profilePicture,
          gender,
          address,
          phone,
      });

      const user = await userModel.findOne({email: email}, {});

      const content = {
        id: user._id,
    };

      const accessToken = jwt.sign(content, secretKey, {expiresIn: "1h"});
        res.status(200).json({message: 'User created successfully',accessToken: accessToken});
        //res.redirect()

         
    }
    catch(err){
        res.status(400).json({message: "Invalid user data", err: err.message});
    }
};

    
userController.signin = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

      const user = await userModel.findOne({ email: email });
      if (!user) {
        return res.status(400).json({message: "user does not exist"})
      }

      const hashedPassword = await bcrypt.compare(password, user.hashedPassword);

      if(!hashedPassword){
        return res.status(400).json({message: "password Incorrect"});
    }

    const content = {
      id: user._id
  }

      const accessToken = jwt.sign(content, secretKey, {expiresIn: "1h"});
        res.status(200).json({accessToken: accessToken});
        //res.redirect()
    }

     
      catch(err){
        res.status(400).json(err.message);
    }
};

  
userController.signout = async (req, res) => {
  try{
      const token = await req.headers['authorization']?.split(' ')[1];
      await blackListedTokensModel.create({ token: token });
      res.status(200).json({message: "signed out successfully"})
  }
  catch(err){
      res.status(400).json(err.message);
  }
};

  module.exports = userController;