import React from "react";
import "./Menu.css";
import Button from "@mui/material/Button";
import SignUp from "../../../pages/Authentication/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   const MenuItems = [
  //     { name: "Home" },
  //     { name: "Stays" },
  //     { name: "Flights" },
  //     { name: "Packages" },
  //     { name: "Sign Up" },
  //   ];
  //   const MenuShow = (props) => {
  //     <Button className={props.name}>{props.name}</Button>;
  //   };
  return (
    <div className="Menu">
      {/* {MenuItems.map((props) => (
        <MenuShow key={props.name} name={props.name} class={props.name} />
      ))} */}
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
