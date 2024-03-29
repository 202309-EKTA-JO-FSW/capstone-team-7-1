import React, { useState } from "react";
import { useRouter } from "next/router";
import useAuthStore from "@/Store/authStore"; //add

const Login = () => {
  const login = useAuthStore((state) => state.login); //add
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(credentials); //add
  };

  return (
    <div
      id="Gradient-bg"
      className="min-h-screen flex items-center justify-center "
    >
      <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md">
        {/* Logo Image */}
        <div className="flex justify-center mb-1">
          <img src="/Logo.png" alt="LFLFhaLogo" className=" w-60 h-32" />
        </div>

        <div className="mb-4 mt-2">
          <h1 className="text-lg   text-center text-orange-700">
            Access Your LFLFha Account
          </h1>
        </div>

        {/* Sign-in form */}
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-[#FCFCFC] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
