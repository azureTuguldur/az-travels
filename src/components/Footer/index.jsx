import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footernames = [
  { name: "Seslendirme ve Alt Jazz" },
  { name: "Self Betimes" },
  { name: "Yard Market" },
  { name: "Hedge Karla" },
  { name: "Media Market" },
  { name: "Yatırımcı İlişkileri" },
  { name: "Is İmkanları" },
  { name: "Mullein Koşulları" },
  { name: "Gillie" },
  { name: "Basal Himmler" },
  { name: "Car Tercihleri" },
  { name: "Autumnal Bulgier" },
  { name: "Size Last" },
];
const Footernamediv = (props) => {
  return <h5>{props.name}</h5>;
};

const Footer = () => {
  return (
    <div className="Footer" style={{ background: "black", color: "white" }}>
      <div className="footer1">
        <h1>Trxvl.</h1>
        <div className="footer12">
          {Footernames.map((props) => (
            <Footernamediv name={props.name} />
          ))}
        </div>
      </div>
      <div>
        <button>Helmet KOD</button>
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
      </div>
      <p>© 1997-2021 Netflix, Inc. i-062d573a0ee099242</p>
    </div>
  );
};

export default Footer;
