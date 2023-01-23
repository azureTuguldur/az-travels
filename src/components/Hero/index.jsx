import React from "react";
import CategoriesText from "./CategoriesText";
import "./Hero.css";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="Hero">
      <Title />
      <SearchBar />
      <CategoriesText />
    </div>
  );
};

export default Hero;
