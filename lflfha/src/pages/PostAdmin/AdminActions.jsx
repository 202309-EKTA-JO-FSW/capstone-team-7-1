"use client"

import React from "react";
import AddDish from "./AddDish";
import AddRestaurant from "./AddRestaurant";

const AdminActions = () => {
    return(
        <div className="bg-gradient-to-r from-yellow-300 to-orange-300 font-serif">
            <div className="flex justify-center">
                <div className="pt-5 text-5xl font-bold">Admin Actions Page</div>
            </div>
            <AddRestaurant />
            <hr className="h-4 bg-orange-800 mx-3 rounded-2xl" />
            <AddDish />
            <div className="flex justify-center text-2xl font-bold">Footer</div>
        </div>
    )
}

export default AdminActions;