
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
    const  {dishID}  = req.params;
    try {
        const getDishWithID = await dishModel.findById(dishID);
        
        if (!getDishWithID)
            return res.status(422).json(`This dish is not found: ${dishID}`);

        return res.status(200).json(getDishWithID);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}



module.exports = {
    getAllDishes,
    getDish
};