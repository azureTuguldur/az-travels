import React from "react";
import CatBtns from "./CategoriesBtns";
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
      <CatBtns />
    </div>
  );
};

export default Hero;
