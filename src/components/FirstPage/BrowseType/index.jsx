import React from "react";
const BrowseTypes = [
  { name: "Hotels", img: "/img/browsetypes/Hotels.png" },
  { name: "Apartments", img: "/img/browsetypes/Apartments.png" },
  { name: "Resorts", img: "/img/browsetypes/Resorts.png" },
  { name: "Villas", img: "/img/browsetypes/Villas.png" },
];
const BrowseView = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="" />
    </div>
  );
};
const BrowseByPropertyType = () => {
  return (
    <div>
      <h2>Browse By Property Type</h2>
      <div className="Browsediv">
        {BrowseTypes.map((props) => {
          <BrowseView name={props.name} img={props.img} />;
        })}
      </div>
    </div>
  );
};

export default BrowseByPropertyType;
