import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ReviewsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    user: "",
    restaurant: "",
    comment: "",
    rating: "",
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3001/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3001/admin/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchReviews();
    fetchRestaurants();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/restaurants/addReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg);
      }
      const data = await res.json();
      setReviews([...reviews, data]);
      window.alert("review added, Refresh to see your review");
      // Clear form data after successful submission
      setFormData({
        user: "",
        restaurant: "",
        comment: "",
        rating: "",
      });
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className=" flex flex-row flex-wrap justify-center items-start gap-4 p-4 w-full pt-16 bg-[#FCFCFC]">
      <div className="flex flex-col justify-center items-center flex-wrap border-r-2 ">
        <h1 className=" font-semibold uppercase text-[#FF6868] text-lg">
          Why Us ?
        </h1>
        <p className="text-4xl font-bold text-[#180800] text-center">
          Fastest Food Delivery In The City
        </p>
        <div className="m-16">
          <div className="w-full flex flex-row items-center p-5 gap-7">
            <div className="flex  bg-[#F36839] rounded-full items-center justify-center h-16 w-16">
              <svg
                fill="#fff"
                className="h-10 w-10 object-containt"
                viewBox="0 0 32 32"
              >
                <path d="M31,7H1A1,1,0,0,0,0,8V24a1,1,0,0,0,1,1H31 a1,1,0,0,0,1-1V8A1,1,0,0,0,31,7ZM25.09,23H6.91A6,6,0,0,0,2,18.09V13.91A6,6,0,0,0,6.91,9H25.09A6,6,0,0,0,30,13.91v4.18A6,6,0,0,0,25.09,23ZM30,11.86A4,4,0,0,1,27.14,9H30ZM4.86,9A4,4,0,0,1,2,11.86V9ZM2,20.14A4,4,0,0,1,4.86,23H2ZM27.14,23A4,4,0,0,1,30,20.14V23Z" />
                <path d="M7.51.71a1,1,0,0,0-.76-.1,1,1,0,0,0-.61.46l-2,3.43a1,1,0,0,0,1.74,1L7.38,2.94l5.07,2.93a1,1,0,0,0,1-1.74Z" />
                <path d="M24.49,31.29a1,1,0,0,0,.5.14.78.78,0,0,0,.26,0,1,1,0,0,0,.61-.46l2-3.43a1,1,0,1,0-1.74-1l-1.48,2.56-5.07-2.93a1,1,0,0,0-1,1.74Z" />
                <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z" />
              </svg>
            </div>
            <div className="font-semibold text-2xl">Best Offer & Prices</div>
          </div>
          <div className="w-full flex flex-row items-center p-5 gap-7">
            <div className="flex  bg-[#F36839] rounded-full items-center justify-center h-16 w-16">
              <svg
                className="h-12 w-14 mr-1 object-containt"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10"
                  stroke="#FFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="font-semibold text-2xl">
              Delivery within 30 minutes
            </div>
          </div>
          <div className="w-full flex flex-row items-center p-5 gap-7">
            <div className="flex  bg-[#F36839] rounded-full items-center justify-center h-16 w-16">
              <svg
                className="h-10 w-12 object-containt"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                  stroke="#FFF"
                  stroke-width="2.5"
                />
              </svg>
            </div>
            <div className="font-semibold text-2xl">
              See at What Our Customers Say -{">"}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center flex-wrap">
        <h1 className=" font-semibold uppercase text-[#FF6868] text-lg">
          Testimonials
        </h1>
        <div className="text-4xl font-bold text-[#180800] text-center justify-center">
          What Our Customers Say About<div> restaurants we offer</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          {reviews
            .map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-xl rounded-lg px-3 py-2 m-4 max-w-72"
              >
                <h2 className="text-lg font-bold mb-2">{review.restaurant}</h2>
                <b className="text-lg font-semibold mb-2">{review.user}</b>
                <p className="text-gray-600 mb-2">{review.comment}</p>
                <p className="text-gray-500">Rating: {review.rating}/5</p>
                <p className="text-gray-500">
                  Date: {new Date(review.dateOfReview).toLocaleDateString()}
                </p>
              </div>
            ))
            .slice(0, 2)}
          <Popup
            trigger={
              <button className="bg-[#F36839] hover:bg-[#f36839c3] text-[#FCFCFC] shadow-[#d04b0892] shadow-lg font-bold py-3 px-3 mt-3 rounded-xl">
                Show Other Reviews
              </button>
            }
            contentStyle={{ maxHeight: "80vh", overflowY: "auto" }}
            modal
            nested
          >
            <div className="flex flex-row flex-wrap justify-center items-center m-5">
              <div className="mx-4 w-full flex justify-center items-center">
                {showForm && (
                  <div className="mt-2 flex flex-col w-full justify-center items-center">
                    <h2 className="text-2xl font-bold my-4">Add Review</h2>
                    <form className="w-3/4 px-5" onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          User:
                        </label>
                        <input
                          className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="user"
                          type="text"
                          name="user"
                          value={formData.user}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Restaurant:
                        </label>
                        <select
                          className="shadow-lg w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="restaurant"
                          name="restaurant"
                          value={formData.restaurant}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a restaurant...</option>
                          {restaurants.map((restaurant) => (
                            <option
                              key={restaurant._id}
                              value={restaurant.name}
                            >
                              {restaurant.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="block  text-gray-700 text-sm font-bold mb-2">
                          Comment:
                        </label>
                        <textarea
                          className="shadow-lg appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="comment"
                          name="comment"
                          value={formData.comment}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Rating:
                        </label>
                        <select
                          className="shadow-lg w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="rating"
                          name="rating"
                          value={formData.rating}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a rating...</option>
                          <option value="0">0</option>
                          <option value="0.5">0.5</option>
                          <option value="1">1</option>
                          <option value="1.5">1.5</option>
                          <option value="2">2</option>
                          <option value="2.5">2.5</option>
                          <option value="3">3</option>
                          <option value="3.5">3.5</option>
                          <option value="4">4</option>
                          <option value="4.5">4.5</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <button
                        className="bg-orange-500 hover:bg-orange-700 text-[#FCFCFC] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Add Review
                      </button>
                    </form>
                  </div>
                )}
              </div>
              {!showForm ? (
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-[#FCFCFC] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setShowForm(!showForm)}
                >
                  Add Review
                </button>
              ) : (
                <button
                  className="font-semibold text-sm text-gray-500"
                  onClick={() => setShowForm(!showForm)}
                >
                  Close Form
                </button>
              )}
              <div className="flex flex-row flex-wrap justify-evenly items-center">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className=" shadow-xl bg-gray-50 rounded-lg px-3 py-2 m-4 min-w-64"
                  >
                    <h2 className="text-lg font-bold mb-2">
                      {review.restaurant}
                    </h2>
                    <b className="text-lg font-semibold mb-2">{review.user}</b>
                    <p className="text-gray-600 mb-2">{review.comment}</p>
                    <p className="text-gray-500">Rating: {review.rating}/5</p>
                    <p className="text-gray-500">
                      Date: {new Date(review.dateOfReview).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Popup>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ReviewsSection;
