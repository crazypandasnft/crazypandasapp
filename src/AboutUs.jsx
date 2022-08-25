import React from "react";
import Navbar from "./Navbar";
import VideoImg from "./image/video-img.png";
import Footer from "./Footer";
import { Parallax } from "react-parallax";
import PandaInfo from "./image/background.png";
import zeniakBoy from "./image/zeniak-boy.png";
import Hangingpanda from "./image/hangingpanda.png"
import PandaGif from "./image/panda-giff.gif"
import panda1 from './image/panda-1.png'
import panda2 from './image/panda-2.png'
import panda3 from './image/panda-3.png'
import panda4 from './image/panda-4.png'
import panda5 from './image/panda-5.png'

// import Mainbg from "./image/mainbg.png"

const AboutUs = () => {
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
      <Parallax strength={600} bgImage={PandaInfo} className="panda-info">
        <div className="pandaGridBar">
          <h1>
            CrazyPanda is an NFT themed project on the BSC ecosystem. Fusing aesthetically pleasing panda art 
            with Run to Earn Gaming. 
          </h1>
          <div className="pandaGridBox">
            <div className="pandaBox">
              <h2>CrazyPanda Nfts</h2>
              <p>
                CrazyPanda NFT is the base  of the entire project and movement, a collection of 3500 Panda Nfts based on Ethereum blockchain lead by zeniak in search for the secret  source of intelligence.
              </p>
            </div>

            <div className="pandaBox">
              <h2>CrazyClan</h2>
              <p>
                An immaculate collection of 3500 diverse pandas that grant you exclusive access to the Crazy Clan, where together, we build a virtuous community in which members can interact and share value through Exclusive merch drops, outdoor campaigns, collaborations with other crypto projects and world-renowned brands doing social good.
              </p>
            </div>

            <div className="pandaBox">
              <h2>Run to Earn 🏃‍♂️</h2>
              <p>
                CrazyPanda features 10 fun, fast paced levels with the degree of difficulty increasing as the player progresses. Players must navigate over and under obstacles , monsters, water and even a volcano raged city to reach the fountain of intelligence and complete the game and earn tokens.
              </p>
            </div>

            <div className="pandaBox">
              <h2>Staking</h2>
              <p>
                Holders can either stake their $BAMBOO tokens to earn more tokens or access the run to earn game, where winners will receive their token rewards, we also have plans in the future to have exclusive NFT drops for token holders and NFT holders .
                CrazyPanda NFT holders will have access to special pool where they will earn staking rewards in BNB
              </p>
            </div>

            <div className="pandaBox">
              <h2>Marketplace </h2>
              <p>
                With $BAMBOO token, you will be able to trade in our in marketplace , where you can easily sell or buy CrazyPanda Nfts as an alternative to opensea . The marketplace will equipped with superior features that give you the best trading experience and money-making opportunities.
              </p>
            </div>

            <div className="pandaBox">
              <h2>Auctions & Raffle</h2>
              <p>
                There will be several auctions to take place and part of the proceeds will be used to buy-back $BAMBOO and burn it. we will auction : Selected Whitelist Spots, NFTs
                exclusive Game Skin, Game collectibles and a lot more.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      
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
       <div className="team-section-bg">
        <div className="team-section-container">
          <div className="team-section-text">
            <h1>The Team</h1>
            <div className="team-upper-bar">
              <div>
                <img src={panda1} alt="panda pic"/>
                <p>Graham Bell</p>
                <p>Tech Lead</p>
              </div>
              <div>
                <img src={panda2} alt="panda pic"/>
                <p>Isaac Newton</p>
                <p>Web3 devrel</p>
              </div>
              <div>
                <img src={panda3} alt="panda pic"/>
                <p>Nikola Tesla</p>
                <p>Head of research</p>
              </div>
            </div>
            <div className="team-lower-bar">
              <div>
                <img src={panda4} alt="panda pic"/>
                <p>Vincent VanGogh</p>
                <p>NFT artist</p>
              </div>
              <div>
                <img src={panda5} alt="panda pic"/>
                <p>Albert Einstein</p>
                <p>Head Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
