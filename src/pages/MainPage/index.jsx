import React from "react";
import "./MainPage.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <Hero />
    </div>
  );
};

export default MainPage;
