import React from "react";
import "./SearchDateOut.css";
import { BsCalendar4 } from "react-icons/bs";

const SearchDateOut = () => {
  return (
    <div className="CheckOut">
      <BsCalendar4 className="CheckOutCal" />
      Check Out
    </div>
  );
};

export default SearchDateOut;
