import React from "react";
import "./Menu.css";
import Button from "@mui/material/Button";
import SignUp from "../../Auth/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="Menu">
      <Button sx={{ color: "white" }} className="MenuBtn">
        Home
      </Button>
      <Button sx={{ color: "white" }} className="MenuBtn">
        Stays
      </Button>
      <Button sx={{ color: "white" }} className="MenuBtn">
        Flights
      </Button>
      <Button sx={{ color: "white" }} className="MenuBtn">
        Packages
      </Button>
      <SignUp />
    </div>
  );
};

export default Menu;
