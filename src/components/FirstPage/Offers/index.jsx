import React from "react";
import "./Offers.css";

const OfferTypes = [
  {
    name: "Domestic Fligts",
    img: "/img/Offers/Flights.png",
    bigp: "Huge savings on flight with trxvl.",
    p: "Book domestic flights starting @ just ₹1459",
    btn: "Book Now",
  },
  {
    name: "International Hotels",
    img: "/img/Offers/ihotels.png",
    bigp: "Enjoy upto 20% off on International Hotels",
    p: "Make the most of  this deal on your first booking with trxvl.",
    btn: "Book Now",
  },
  {
    name: "International Hotels",
    img: "/img/Offers/ihotels.png",
    bigp: "Enjoy upto 20% off on International Hotels",
    p: "Make the most of  this deal on your first booking with trxvl.",
    btn: "Book Now",
  },
  {
    name: "International Hotels",
    img: "/img/Offers/ihotels.png",
    bigp: "Enjoy upto 20% off on International Hotels",
    p: "Make the most of  this deal on your first booking with trxvl.",
    btn: "Book Now",
  },
  {
    name: "International Hotels",
    img: "/img/Offers/ihotels.png",
    bigp: "Enjoy upto 20% off on International Hotels",
    p: "Make the most of  this deal on your first booking with trxvl.",
    btn: "Book Now",
  },
];
const OfferDiv = (props) => {
  return (
    <div className="miniOffer">
      <img src={props.img} alt="" />
      <div className="Offersminidiv">
        <p>{props.name}</p>
        <h2>{props.bigp}</h2>
        <p>{props.p}</p>
        <button variant="contained">{props.btn}</button>
      </div>
    </div>
  );
};

const Offers = () => {
  return (
    <div className="Offers">
      <h1>Offers</h1>
      <div className="Offersdiv">
        {OfferTypes.map((props) => (
          <OfferDiv
            name={props.name}
            img={props.img}
            bigp={props.bigp}
            p={props.p}
            btn={props.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
