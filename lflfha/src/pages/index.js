"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage/FullLandingPage";

const Hello = () => {
  // const [testResult, setTestResult] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3001/test")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTestResult(data);
  //     });
  // }, []);

  return <main className="justify-center font-Inter flex min-h-screen ">
    <LandingPage/>
  </main>;
};

export default Hello;
