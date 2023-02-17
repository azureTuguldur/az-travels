import "./Catbtns.css";
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
const active = () => {
  return;
};
const CatBtnDes = (props) => {
  return (
    <button className="Catbtns" onClick={active}>
      <img src={props.img} alt="" />
      <h4>{props.name}</h4>
    </button>
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
