import React from "react";
import "./TopDestination.css";
const Destinations = [
  {
    name: "Bali,Indonesia",
    img: "/img/Destinationicons/Indonesia.png",
  },
  {
    name: "Kerry,Ireland",
    img: "/img/Destinationicons/Ireland.png",
  },
  {
    name: "Sydney,Australia",
    img: "/img/Destinationicons/Australia.png",
  },
  {
    name: "Sydney,Australia",
    img: "/img/Destinationicons/Australia.png",
  },
  {
    name: "Sydney,Australia",
    img: "/img/Destinationicons/Australia.png",
  },
  {
    name: "Sydney,Australia",
    img: "/img/Destinationicons/Australia.png",
  },
  {
    name: "Sydney,Australia",
    img: "/img/Destinationicons/Australia.png",
  },
  {
    name: "Sydney,Australia",
    img: "/img/Destinationicons/Australia.png",
  },
  {
    name: "Paris,France",
    img: "/img/Destinationicons/France.png",
  },
];
const DestinationCard = (props) => {
  return (
    <div className="descard">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
    </div>
  );
};
const TopDestination = () => {
  return (
    <div className="TopDestination">
      <h2>Top Vacation Destinations</h2>
      <div className="Desflex">
        {Destinations.map((props) => (
          <DestinationCard
            name={props.name}
            className={props.class}
            img={props.img}
          />
        ))}
      </div>
    </div>
  );
};

export default TopDestination;
