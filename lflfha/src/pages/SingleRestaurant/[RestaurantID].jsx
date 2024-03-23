// import React from "react";
// import { useRouter } from "next/router";

// export default function SingleRestaurant() {
//   const router = useRouter();
//   const restaurant = router.query;
//   return <div>SingleRestaurant</div>;
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SingleRestaurant() {
  const router = useRouter();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch restaurant details
  const fetchRestaurantDetails = async () => {
    // Extract the restaurant ID from the query parameters
    const { restaurantID } = router.query;

    if (!restaurantID) {
      setError("Restaurant ID not provided.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3001/restaurants/${restaurantID}`
      );
      setRestaurantDetails(response.data);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
      setError("Error fetching restaurant details.");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      fetchRestaurantDetails();
    }
  }, [router.isReady]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="restaurant-details">
      <h1>{restaurantDetails.name}</h1>
      <p>{restaurantDetails.description}</p>
      <p>Phone: {restaurantDetails.phone}</p>
      <p>Opening Hours: {restaurantDetails.openingHours}</p>
      {/* Render more restaurant details as needed */}
    </div>
  );
}
