import React from "react";
import "./Menu.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Menu = () => {
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
      <Button sx={{ color: "white" }} className="MenuBtn">
        Sign Up
      </Button>
    </div>
  );
};

export default Menu;
