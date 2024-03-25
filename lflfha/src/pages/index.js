"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import AllRestaurants from "./GetAllRestaurants/AllRestaurants";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import useAuthStore from "@/Store/authStore";

export const metadata = {
  title: "LFLFHA",
  description: "Ordering Delivery Service Website",
};

const Hello = () => {
  
  return <main className="font-Inter scroll-smooth">
    <LandingPage />
  </main>;
};

export default Hello;
