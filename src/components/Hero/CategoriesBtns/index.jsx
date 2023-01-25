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

const CatBtns = () => {
  const CatSelection = [
    { name: "Beaches", img: "" },
    { name: "Deserts", img: "" },
    { name: "Mountains", img: "" },
    { name: "Iconic Sities", img: "" },
    { name: "Houseboats", img: "" },
    { name: "Countryside", img: "" },
    { name: "Camping", img: "" },
    { name: "Castles", img: "" },
    { name: "Skiing", img: "" },
    { name: "Tropical", img: "" },
  ];
  const CatBtnDes = (props) => {
    <div>
      <img src={props.img} alt="" />
      <h4>{props.name}</h4>
    </div>;
  };
  return <div></div>;
};

export default CatBtns;
