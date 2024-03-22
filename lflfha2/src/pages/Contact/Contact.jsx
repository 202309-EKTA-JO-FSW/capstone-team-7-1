import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks ,Form submitted!');
  };

  return (
    <div className="flex flex-col min-h-screen">
<div
  className="bg-cover bg-center flex items-center justify-center text-4xl text-white font-bold mb-5"
  style={{ backgroundImage: "url('/1.png')", height: '350px' }}>
</div>

    <h6 className="text-2xl  items-center text-orange-700 flex-grow flex items-center justify-center p-8 ">SEND US A MESSAGE</h6>

      {/* Form container */}
      <div className="flex-grow flex items-center justify-center ">
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-10 bg-white rounded-lg shadow-md">
      

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
               Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
               Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
               Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

       <div className="min-h-screen max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mb-40 py-20   ">
         <div >
            <h3 className=" text-lg font-semibold text-orange-600 mb-2 mx-10 hover:underline  ">Location</h3>
            <p className="text-gray-700 mx-10">Istiklal Street, Amman,<br /> Jordan</p>
          </div>
         <div>
            <h3 className="text-lg font-semibold text-orange-600 mb-2 hover:underline ">Call Us</h3>
            <p className="text-gray-700">(+962) 757-9860</p>
          </div>
         <div>
            <h3 className="text-lg font-semibold text-orange-600 mb-2 hover:underline ">Opening Hours</h3>
            <p className="text-gray-700">09:00 AM - 10:00 PM<br />Every Day</p>
          </div>
         
         <div>
            <h3 className="text-lg font-semibold text-orange-600 mb-2 hover:underline ">send your feedback</h3>
            <p className="text-gray-700">please share your experience to help us enhance our services  </p>
          </div>
      </div>
    </div>
  );
};

export default ContactPage;
