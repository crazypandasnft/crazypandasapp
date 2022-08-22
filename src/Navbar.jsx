import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Icon from "./image/pandaicon.png"

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 col-lg-10 mx-lg-auto">
            {/* navbar start */}

            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={Icon} alt="" />
                  {/* CRAZY PANDA  */}
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="navtabmob collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active navtext"
                        aria-current="page"
                        to="/story-so-far"
                      >
                        STORY SO FAR
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link navtext" to="/game">
                        GAME
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link navtext" to="/stake">
                        STAKE
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link navtext" to="/roadmap">
                        ROADMAP
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      {/* <NavLink className="nav-link navtext" to="#">
                        Whitepaper
                      </NavLink> */}
                      <a className="nav-link navtext" rel="noreferrer" target="_blank" href="https://docs.crazypandas.net">
                        WHITEPAPER
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link navtext nav-icon" rel="noreferrer" target="_blank" href="https://twitter.com/CrazyPanda_NFT">
                        <FaTwitter />
                      </a>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link navtext nav-icon" to="#">
                        <FaDiscord />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
