import React from "react";
import Navbar from "./Navbar";
import VideoImg from "./image/video-img.png";
import Footer from "./Footer";
import { Parallax } from "react-parallax";
import PandaInfo from "./image/background.png";
import zeniakBoy from "./image/zeniak-boy.png";
import Hangingpanda from "./image/hangingpanda.png"
import PandaGif from "./image/panda-giff.gif"


// import Mainbg from "./image/mainbg.png"


const StorySoFar = () => {
  return (
    <>
      {/* section-1 */}
      
      <div className="story-bg">
    
        <Navbar />
        {/* <div className="logo-secton mx-auto col-10">
          <img className="panda-logo" src={FrontImg} alt="" />
        </div> */}
        </div>

      {/* section-2 */}
      <div className="hellomsg">
        <div className="bg-black">
        <div className="hellomsg-text mx-auto col-10">
          <h1>SAY HELLO TO CRAZY PANDA</h1>
          <p>
            This is the story of the Great Panda who went on a mission to
            discover the greatest source of intelligence in the universe. All
            over the world, pandas are known for their playfulness,strength and
            carefree attitude.
          </p>
        </div>
        </div>
      </div>
      {/* section-3 */}
      <Parallax strength={600} bgImage={PandaInfo} className="panda-info">
        <div className="pandainfo-container mx-auto col-10">
          <img className="col-lg-5 col-md-8 order-lg-1" src={zeniakBoy} alt="panda" />
          <div className="pandainfo-text col-lg-5 col-md-10">
            <h1>
              <span className="line">ABOUT </span>
              <br />
              <span className="h1margin">ZENIAK</span>
            </h1>
            <p>
              Zeniak was a panda born different from any regular panda. He was
              highly intelligent and wanted more for other pandas who spent most
              of their time eating bamboo and resting all day
              <br />
              In his search for this source of intelligence,he came across an
              ancient scroll containing the secret location of ‘the source of
              intelligence’ Zeniak set out on a mission with his pack to this
              secret location.
            </p>
          </div>
        </div>
      </Parallax>
      {/* section-4 */}
      <div className="black-bg">
        <div className="videosection-container mx-auto col-10">
          <img src={VideoImg} alt="" />
          {/* <video src={NowVideo} autoPlay muted loop></video> */}
          <div className="blackbg-text">
            <h3>AFTER TRAVELING</h3>
            <p>
              After traveling for months and spending sleepless nights trying to
              transcribe the scroll, luck favored Zeniak and he found the source
              of intelligence to be a fountain of water right in the middle of a
              volcano. <br/> Only one crazy enough would deem it fit to continue but
              he did, he sought out this great power. Zeniak going through fire
              and brimstone, survived the feat with a vial of the fountain of
              intelligence and gave it to his pack, every panda with a little
              drop to taste.
            </p>
          </div>
        </div>
      </div>
      {/* section-5 */}
      <Parallax strength={600} bgImage={PandaInfo} className="panda-info">
        <img className="hangingpanda" src={Hangingpanda} alt="" />
        <div className="pandainfo-container mx-auto col-10">
          <img className="col-lg-5 col-md-8" src={PandaGif} alt="panda" />
          <div className="pandainfo-text col-lg-5 col-md-10">
            <h1>
              <span className="line">Bummmm </span>
              
            </h1>
            <p className="col-lg-10">
              ‘’ Bummmm ‘’ the pandas , all transforming into mystic forms with
              eyes as bright as the sun and each body different from the other
              ,they could see the hidden treasure of the universe. They were in
              an astronomical space.
            </p>
          </div>
        </div>
      </Parallax>
      <Footer />
    </>
  );
};

export default StorySoFar;
