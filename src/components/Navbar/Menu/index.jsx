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
      <Button className="MenuBtn">Home</Button>
      <Button className="MenuBtn">Stays</Button>
      <Button className="MenuBtn">Flights</Button>
      <Button className="MenuBtn">Packages</Button>
      <Button className="MenuBtn">Sign Up</Button>
    </div>
  );
};

export default Menu;
