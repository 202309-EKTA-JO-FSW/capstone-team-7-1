
const restaurantModel = require("../models/restaurant");


//getting all Restaurants 
const getAllRestaurants = async (req, res) => {
    try {
        const allRestaurants = await restaurantModel.find({})
        
        if (!allRestaurants)
            return res.status(404).json({message: "No restaurants were found"})

        return res.status(200).json(allRestaurants)
    }
    catch {
        return res.status(422).json({ error: 'unable to fetch restaurants' });
    }
}

// getting a specific restaurant
const getRestaurant = async (req, res) => {
    const { restaurantID } = req.params
    try {
        const getRestaurantWithID = await restaurantModel.findById(restaurantID)
        
        if (!getRestaurantWithID)
            return res.status(422).json("this Restaurant is not Found")    

        return res.status(200).json(getRestaurantWithID)
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllRestaurants,
    getRestaurant
};

