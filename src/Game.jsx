import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Logo from "./image/pandalogo.png";
import PlayButton from "./image/playnow.png";

const Game = () => {
  return (
    <>
      <div className="game-bg">
        <Navbar />
        <div className="d-flex justify-content-center">

        <div className="game-logo">
          <div className="row">
            <div className="d-flex flex-column align-items-center mx-auto col-12">
              <img className="col-lg-10 col-md-11 col-12" src={Logo} alt="" />
              <NavLink className="d-flex justify-content-center" to="#">
                <img className=" playnow-btn col-lg-8  col-6" src={PlayButton} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Game;
