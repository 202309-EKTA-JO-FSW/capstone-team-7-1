import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

function Cart() {
  const router = useRouter();
  const { Cart } = router.query;

  const cart = Cart ? JSON.parse(Cart) : {};

  const [dishes, setDishes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchAllDishes = async () => {
      try {
        const response = await fetch(`http://localhost:3001/admin/dishes`);
        if (!response.ok) {
          throw new Error("Failed to fetch dishes");
        }
        const data = await response.json();
        const filteredDishes = data.filter((dish) => cart[dish._id]);
        setDishes(filteredDishes);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchAllDishes();
  }, [cart]);

  useEffect(() => {
    let totalPrice = 0;
    let totalItems = 0;
    dishes.forEach((dish) => {
      const quantity = cart[dish._id] || 0;
      totalItems += quantity;
      totalPrice += dish.price * quantity;
    });
    setTotalPrice(totalPrice);
    setTotalItems(totalItems);
  }, [dishes, cart]);

  const goHome = () => {
    router.push("/");
  };

  const handleCheckout = () => {
    const restaurantID = dishes.length > 0 ? dishes[0].restaurant : "";
    router.push(
      `/Order/Order?totalPrice=${totalPrice}&totalItems=${totalItems}&restaurantId=${restaurantID}`
    );
  };

  return (
    <div>
      <Navbar />
      <div
        id="Gradient-bg"
        className=" w-full flex flex-col justify-center items-center flex-wrap"
      >
        <br />
        <br />
        <br />
        <div className="font-bold text-3xl py-16">Cart Items</div>
        <div className="w-1/2">
          {dishes.map((dish) => (
            <div
              key={dish._id}
              className="flex m-3 p-4 pr-20 bg-gradient-to-r from-[#ff686862] via-stone-200 to-[#ff686871] rounded-2xl shadow-xl  shadow-gray-500 "
            >
              <div>
                <img
                  src={dish.image}
                  alt="dish photo"
                  className="max-w-[130px] max-h-[130px] rounded-2xl"
                />
              </div>
              <div className="ml-3 flex flex-col justify-center items-center">
                <p className="font-extrabold text-xl">{dish.name}</p>
                <p className="font-bold text-lg">
                  Price:{" "}
                  <span className="font-semibold text-base">{dish.price}$</span>
                </p>
                <p className="font-bold text-lg">
                  Quantity:{" "}
                  <span className="font-semibold text-base">
                    {cart[dish._id]}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-col fles-wrap">
          <h1 className="font-bold text-3xl mt-5">Summary</h1>
          <div className=" mt-6  w-[500px]  p-4 pr-20 bg-gradient-to-r from-[#ff68687d] to-stone-100 rounded-2xl shadow-xl  shadow-gray-500">
            <p className="font-bold text-lg">
              Total Items:{" "}
              <span className="font-semibold text-base">{totalItems}</span>
            </p>
            <p className="font-bold text-lg">
              Total Price:{" "}
              <span className="font-semibold text-base">{totalPrice}$</span>
            </p>
            <button
              onClick={handleCheckout}
              className="py-1 px-10 font-bold text-lg bg-[#FF6868] hover:bg-[#fd6f6fa2] mt-5 rounded-3xl"
            >
              Order & Checkout
            </button>
          </div>
          <button
            onClick={goHome}
            className="mt-14  py-1 px-10 font-bold text-lg bg-[#FF6868] hover:bg-[#fd6f6fa2] rounded-3xl"
          >
            Back to home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
