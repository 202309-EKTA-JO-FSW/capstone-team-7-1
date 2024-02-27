
const dishModel = require("../models/dish");


//getting all Dishes ( get ) 
const getAllDishes = async (req, res) => {
    try {
        const menu = await dishModel.find({})
        
   // if no dishes where found then the is no menu 
        if (!menu)
            res.status(422).json("No menu")
             
            res.status(200).json(menu)

    }
    catch {
        res.status(422).json({error: "unable to fetch menu"})
    }
}


// getting a specific Dish ( get )
const getDish = async (req, res) => {
    const {dishID} = req.params
    try {
        const getDishtWithID = await dishModel.findById(dishID)
        
        if (!getDishtWithID)
        res.status(422).json("this Dish is not Found")    

        res.status(200).json(getRestaurantWithID)
    }
    catch {
        res.json({ error: 'unable to fetch restaurant' });
    }
}


module.exports = {
    getAllDishes,
    getDish
};


