import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Layout/Navbar';

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
          throw new Error('Failed to fetch dishes');
        }
        const data = await response.json();
        const filteredDishes = data.filter(dish => cart[dish._id]);
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
    dishes.forEach(dish => {
      const quantity = cart[dish._id] || 0;
      totalItems += quantity;
      totalPrice += (dish.price * quantity);
    });
    setTotalPrice(totalPrice);
    setTotalItems(totalItems);
  }, [dishes, cart]);

  const goHome = () => {
    router.push('/');
  }

  const handleCheckout = () => {
    const restaurantID = dishes.length > 0 ? dishes[0].restaurant : '';
    router.push(`/Order/Order?totalPrice=${totalPrice}&totalItems=${totalItems}&restaurantId=${restaurantID}`);
  };

  return (
    <div className='m-6 '>
      <Navbar />
      <br />
      <br />
      <br />
      <div className='font-bold text-3xl'>Cart Items</div>
      <div className=''>
        {dishes.map(dish => (
          <div key={dish._id} className='flex w-[500px] m-3 p-4 pr-20 bg-gradient-to-r from-pink-300 via-stone-200 to-pink-400 rounded-2xl shadow-xl  shadow-gray-500 '>
            <div>
              <img src={dish.image} alt='dish photo' className='max-w-[130px] max-h-[130px] rounded-2xl'/>
            </div>
            <div className='ml-3'>
              <p className='font-extrabold text-xl'>{dish.name}</p>
              <p className='font-bold text-lg'>Price: <span className='font-semibold text-base'>{dish.price}$</span></p>
              <p className='font-bold text-lg'>Quantity: <span className='font-semibold text-base'>{cart[dish._id]}</span></p>
            </div>
          </div>
        ))}
      </div>
      <div>
      <h1 className='font-bold text-3xl mt-5'>Summary</h1>
      <div className=' mt-4 w-[500px] m-3 p-4 pr-20 bg-gradient-to-r from-pink-300 to-stone-200 rounded-2xl shadow-xl  shadow-gray-500'>
        <p className='font-bold text-lg'>Total Items: <span className='font-semibold text-base'>{totalItems}</span></p>
        <p className='font-bold text-lg'>Total Price: <span className='font-semibold text-base'>{totalPrice}$</span></p>
        <button onClick={handleCheckout} className='py-1 px-10 font-bold text-lg bg-pink-600 hover:bg-pink-400 rounded-3xl'>Order & Checkout</button>
      </div>
      </div>
      <div>
        <button onClick={goHome} className='mt-20 py-1 px-10 font-bold text-lg bg-pink-600 hover:bg-pink-400 rounded-3xl'>Back to home</button>
      </div>
    </div>
  );
}

export default Cart;