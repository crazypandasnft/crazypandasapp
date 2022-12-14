import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Stake from "./Stake";
import AboutUs from "./AboutUs";
import Game from "./Game";
import Faq from "./Faq";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stake" element={<Stake />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/roadmap" element={<Roadmap />} />
        <Route exact path="/tokenomics" element={<Tokenomics />} />
        <Route exact path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
};

export default Main;
