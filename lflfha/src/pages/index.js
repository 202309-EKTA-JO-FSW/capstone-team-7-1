"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import AllRestaurants from "./GetAllRestaurants/AllRestaurants";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import useAuthStore from "@/Store/authStore";

const Hello = () => {
  // const [testResult, setTestResult] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3001/test")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTestResult(data);
  //     });
  // }, []);
  const logout = useAuthStore((state) => state.logout) //add
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated) //add

  return <main className="font-Inter scroll-smooth">
    
    {isAuthenticated ? <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={logout}>logout</button> : null}
    {/* <NavBar/> */}
    <LandingPage />

    {/* <AllRestaurants/> */}
    {/* <Footer/> */}
  </main>;
};

export default Hello;
