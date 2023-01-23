import React from "react";
import "./SearchInput.css";
import { BsSearch } from "react-icons/bs";
import InputBase from "@mui/material/InputBase";

const SearchInput = () => {
  return (
    <div className="SearchInput">
      <BsSearch className="SearchIcon" />
      <InputBase
        className="SearchIn"
        placeholder="Search destination, hotels"
      />
    </div>
  );
};

export default SearchInput;
