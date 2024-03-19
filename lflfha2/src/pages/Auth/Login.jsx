import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/Store/authStore';

const Login = () => {
  const login = useAuthStore((state) => state.login)
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
  login(credentials)
    
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFD5C2]">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
        {/* Logo Image */}
              <div className="flex justify-center mb-6">
                <img src="/LflfhaLogo.png" alt="LFLFhaLogo" className="mb-4" />
                
              </div>

        {/* Form Title */}
        {/* <h1 className="text-2xl font-bold text-center mb-6">Welcome in LFLFha account.</h1> */}

        {/* Sign-in form */}
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={credentials.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
          </div>
          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" value={credentials.password} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
          </div>
          {/* Submit button */}
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
