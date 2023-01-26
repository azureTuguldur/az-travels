import React from "react";
import TopDestination from "./TopDestination";
import "./Firstpage.css";
import Offers from "./Offers";
import BrowseByPropertyType from "./BrowseType";

const FirstPage = () => {
  return (
    <div className="Firstpage">
      <TopDestination />
      <Offers />
      <BrowseByPropertyType />
    </div>
  );
};

export default FirstPage;
