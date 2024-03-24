import React, { useEffect, useState } from 'react';

const ReviewsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    user: '',
    restaurant: '',
    comment: '',
    rating: '',
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3001/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3001/admin/restaurants');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
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
      const res = await fetch('http://localhost:3001/restaurants/addReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg);
      }
      const data = await res.json();
      setReviews([...reviews, data]);
      window.alert("review added")
      // Clear form data after successful submission
      setFormData({
        user: '',
        restaurant: '',
        comment: '',
        rating: '',
      });
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className="m-4">
      <h1 className="text-3xl font-semibold mb-4">Reviews</h1>
      <div className="flex flex-wrap">
        {reviews.map((review, index) => (
          <div key={index} className="bg-red-500 shadow-md rounded-lg px-3 py-2 m-4 max-w-72">
            <h2 className="text-lg font-bold mb-2 text-gray-300">{review.restaurant}</h2>
            <b className="text-lg font-semibold mb-2">{review.user}</b>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <p className="text-gray-500">Rating: {review.rating}/5</p>
            <p className="text-gray-500">Date: {new Date(review.dateOfReview).toLocaleDateString()}</p>
          </div>
        ))}
        </div>
        <div className='m-4'>
            <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setShowForm(true)}>
                Add Review
            </button> 
        </div>
      
      {showForm &&
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Add Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">User:</label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user"
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Restaurant:</label>
            <select
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="restaurant"
              name="restaurant"
              value={formData.restaurant}
              onChange={handleChange}
              required
            >
              <option value="">Select a restaurant...</option>
              {restaurants.map((restaurant) => (
                <option key={restaurant._id} value={restaurant.name}>{restaurant.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Comment:</label>
            <textarea
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
            <select
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Add Review
          </button>
        </form>
      </div>}
    </div>
  );
};

export default ReviewsSection;
