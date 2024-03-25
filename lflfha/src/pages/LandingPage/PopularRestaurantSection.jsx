import React, { useState, useEffect } from "react";
import Cards from "@/components/Common/Cards";
import axios from "axios";
import Button from "@/components/Common/Button";
import Link from "next/link";

const PopulerRestaurantSection = () => {
  const [popularRestaurants, setPopularRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchALLRestaurant();
  }, []);

  const fetchALLRestaurant = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/restaurants`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const sortedRestaurants = response.data.sort((a, b) => b.rate - a.rate); // Sort restaurants by rate in descending order
      setAllRestaurants(sortedRestaurants);
      setPopularRestaurants(sortedRestaurants.slice(0, 4)); 
    } catch (error) {
      console.error("Error fetching popular restaurants:", error);
    }
  };

  return (
    <section className="bg-[#FCFCFC] w-full flex flex-col items-center gap-4 px-16 tracking-widest">
      <div className="uppercase w-full flex flex-col items-center justify-center font-semibold">
        <p className="text-[#FF6868] text-lg">EXPLORE</p>
        <p className="text-4xl text-[#180800] text-center">
          Popular Restaurants
        </p>
      </div>
      <div className="popular-restaurants flex flex-row flex-wrap justify-center gap-4 mt-5">
        {popularRestaurants.map((restaurant, index) => (
          <Link
            href={`/SingleRestaurant/${restaurant._id}`} 
            key={restaurant._id}
          >
            <Cards
              image={restaurant.logo}
              title={restaurant.name}
              rating={restaurant.rate}
            />
          </Link>
        ))}
      </div>
      <Button
        text="Browse Restaurants"
        destination="/GetAllRestaurants/AllRestaurants"
      />
    </section>
  );
};

export default PopulerRestaurantSection;
