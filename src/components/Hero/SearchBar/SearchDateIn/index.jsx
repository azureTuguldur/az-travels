import React from "react";
import "./SearchDateIn.css";
import { BsCalendar4 } from "react-icons/bs";
import { CalendarPicker } from "@mui/x-date-pickers";

const SearchDateIn = () => {
  return (
    <div className="Checkin">
      <BsCalendar4 className="CheckInCal" />
      Check In
    </div>
  );
};

export default SearchDateIn;
