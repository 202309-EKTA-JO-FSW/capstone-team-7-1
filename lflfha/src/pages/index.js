"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage/FullLandingPage";
import AllRestaurants from "./GetAllRestaurants/AllRestaurants";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const Hello = () => {
  // const [testResult, setTestResult] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3001/test")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTestResult(data);
  //     });
  // }, []);

  return <main className="font-Inter scroll-smooth">
    <NavBar/>
    {/* <LandingPage /> */}
    <AllRestaurants/>
    <Footer/>
  </main>;
};

export default Hello;
