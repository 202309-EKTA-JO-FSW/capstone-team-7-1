"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "../Pages/LandingPage/FullLandingPage";

const Hello = () => {
  const [testResult, setTestResult] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/test")
      .then((res) => res.json())
      .then((data) => {
        setTestResult(data);
      });
  }, []);

  return (
    <>
      <LandingPage></LandingPage>
    </>
  );
};

export default Hello;
