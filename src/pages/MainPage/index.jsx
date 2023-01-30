import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FirstPage from "../../components/FirstPage";
import { Button } from "@mui/material";
import Footer from "../../components/Footer";

const MainPage = () => {
  // const Home = () => {
  //   const [isLogged, setIsLogged] = useState(false);
  //   useEffect(() => {
  //     const newLogged = localStorage.getItem("isLogged");
  //     console.log("effect");
  //     setIsLogged(newLogged);
  //   }, []);
  //   if (!isLogged) {
  //     return <Navigate replace to="/login" />;
  //   }
  // };
  // const logOut = () => {
  //   localStorage.setItem("isLogged", false);
  //   setIsLogged(false);
  // };
  return (
    <div className="MainPage">
      {/* <Button onClick={logOut}> Гарах</Button> */}
      {/* <img src="/img/background.png" alt="#" /> */}
      <Navbar />
      <Hero />
      <FirstPage />
      <Footer />
    </div>
  );
};

export default MainPage;
