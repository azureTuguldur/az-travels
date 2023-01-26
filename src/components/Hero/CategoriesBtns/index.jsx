// import React from "react";
// import Beaches from "./Beaches";
// import Deserts from "./Deserts";
// import Mountains from "./Mountains";
// import Iconic from "./IconicCities";
// import Houseboats from "./Houseboats";
// import Countryside from "./Countryside";
// import Camping from "./Camping";
// import Castles from "./Castles";
// import Skiing from "./Skiing";
// import Tropical from "./Tropical";
import { ClassNames } from "@emotion/react";
import "./Catbtns.css";

// const CatBtns = () => {
//   return (
//     <div className="Catbtns">
//       <Beaches />
//       <Deserts />
//       <Mountains />
//       <Iconic />
//       <Houseboats />
//       <Countryside />
//       <Camping />
//       <Castles />
//       <Skiing />
//       <Tropical />
//     </div>
//   );
// };
const CatSelection = [
  { name: "Beaches", img: "/img/icons/Beaches.png" },
  { name: "Deserts", img: "/img/icons/Deserts.png" },
  { name: "Mountains", img: "/img/icons/Mountains.png" },
  { name: "Iconic Sities", img: "/img/icons/IconicSities.png" },
  { name: "Houseboats", img: "/img/icons/Houseboats.png" },
  { name: "Countryside", img: "/img/icons/Countryside.png" },
  { name: "Camping", img: "/img/icons/Camping.png" },
  { name: "Castles", img: "/img/icons/Castles.png" },
  { name: "Skiing", img: "/img/icons/Skiing.png" },
  { name: "Tropical", img: "/img/icons/Tropical.png" },
];
const CatBtnDes = (props) => {
  return (
    <div className="Catbtns">
      <img src={props.img} alt="" />
      <h4>{props.name}</h4>
    </div>
  );
};

const CatBtns = () => {
  return (
    <div className="Catbtnhaver">
      {CatSelection.map((props) => (
        <CatBtnDes name={props.name} img={props.img} />
      ))}
    </div>
  );
};

export default CatBtns;
