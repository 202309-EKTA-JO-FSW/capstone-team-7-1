import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';/////////////////////////


const Login = () => {
  const [credentials, setCredentials] = useState({ 
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/user/signin', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const { accessToken } = await res.json();

      // Store the token in local storage or context/state management
      localStorage.setItem('token', accessToken);

      // Redirect to the home page or user dashboard after successful sign-in
      router.push('/'); // Adjust the route as necessary
    } catch (err) {
      console.log(err.message);
      // You can add more robust error handling here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFD5C2]">
      <form onSubmit={handleSubmit} className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" value={credentials.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" value={credentials.password} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
