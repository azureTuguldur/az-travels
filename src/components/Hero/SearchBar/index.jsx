import React from "react";
import "./SearchBar.css";
import SearchBtn from "./SearchBtn";
import SearchDateIn from "./SearchDateIn";
import SearchDateOut from "./SearchDateOut";
import SearchInput from "./SearchInput";
import SearhType from "./SearchType";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <SearchInput />
      <SearchDateIn />
      <SearchDateOut />
      <SearhType />
      <SearchBtn />
    </div>
  );
};

export default SearchBar;
