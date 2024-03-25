import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const Order = () => {
  const router = useRouter();
  const { totalPrice, totalItems, restaurantId } = router.query || {};
  const id = restaurantId ? restaurantId.toString() : null;

  const [restaurant, setRestaurant] = useState({});
  const [acceptance, setAcceptance] = useState(false);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/admin/restaurants/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch dishes");
        }
        const data = await response.json();
        setRestaurant(data);
        console.log(restaurant.name);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      }
    };

    fetchRestaurant();
  }, [restaurantId]);

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="h-full w-full">
      <Navbar />
      <div
        id="Gradient-bg"
        className="  flex flex-col flex-wrap justify-center items-center py-32"
      >
        <div className="font-bold text-3xl">Checkout Order</div>
        <div className="flex mt-4 ml-6 bg-gradient-to-r from-[#ff68689a] to-stone-100  p-4 rounded-xl">
          <div>
            <img
              src={restaurant.logo}
              alt="restauraant logo"
              className="max-w-[170px] max-h-[170px] rounded-2xl mr-3"
            />
          </div>
          <div>
            <div className="font-extrabold text-xl">{restaurant.name}</div>
            <div className="font-semibold text-lg">Items: {totalItems}</div>
            <div className="font-semibold text-lg">
              Total Price: {totalPrice}$
            </div>
            <div className="font-semibold text-lg">
              Delivery time: 40 minutes
            </div>
            <button
              onClick={() => setAcceptance(true)}
              className="py-1 px-10 mt-7 font-bold text-lg bg-[#FF6868] hover:bg-[#fd6f6fa2] rounded-3xl"
            >
              Submit Order
            </button>
          </div>
        </div>
        {acceptance && (
          <div className="font-bold text-2xl ml-7 mt-7 bg-[#FF6868] text-white p-3 rounded-lg">
            Order Submitted successfully
          </div>
        )}
        <div>
          <button
            onClick={goHome}
            className="mt-10 py-1 px-10 font-bold text-lg bg-[#FF6868] hover:bg-[#fd6f6fa2] rounded-3xl"
          >
            Back to home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
