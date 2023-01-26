import React from "react";
import "./MainPage.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FirstPage from "../../components/FirstPage";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Navbar />
      <Hero />
      <FirstPage />
    </div>
  );
};

export default MainPage;
