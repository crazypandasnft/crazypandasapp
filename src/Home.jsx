import React from "react";
import Navbar from "./Navbar";
import BgVideo from "./video/green-galaxy.mp4";
import MainImg from "./image/crazypanda.png"

const Home = () => {
  return (
    <>
      {/* <div className='home-bg'>
    <Navbar/>
    </div> */}
      <div className="bgvideo">
        <Navbar />

        <video className="" src={BgVideo} autoPlay loop muted></video>
       
        
        <div className=" crazy-panda">
          <img src={MainImg} id="panda5-img" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
