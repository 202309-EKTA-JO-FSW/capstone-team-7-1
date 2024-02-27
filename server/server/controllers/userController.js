const express = require("express");
const User = require("../models/user");

const userController = {
    // Sign Up
    signUp: async (req, res) => {
      const { userName, email, password, profilePicture, gender, address, phone } = req.body;
  
      try {
        // Check for existing user 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).send('User already exists');
        }
  
       
        const user = await User.create({
          userName,
          email,
          password, 
          profilePicture,
          gender,
          address,
          phone,
        });
  
        res.status(201).json({
          _id: user._id,
          userName: user.userName,
          email: user.email,
          message: 'User created successfully',
        });
      } catch (error) {
        res.status(400).send('Invalid user data');
      }
    },
  
    // Sign In
    signIn: async (req, res) => {
      const { email, password } = req.body;
  
      try {
        // Check for user's existence 
        const user = await User.findOne({ email, password });
        if (user) {
          res.json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            message: 'User signed in successfully',
          });
        } else {
          res.status(401).send('Invalid email or password');
        }
      } catch (error) {
        res.status(500).send('Server error during sign in');
      }
    },
  
    // Sign Out
    signOut: (req, res) => {
      res.send('Sign-out successful');
    },
  };
  
  module.exports = userController;