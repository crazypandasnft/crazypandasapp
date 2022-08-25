import React from "react";
import Navbar from "./Navbar";
//import VideoImg from "./image/video-img.png";
import Footer from "./Footer";
// import { Parallax } from "react-parallax";
// import PandaInfo from "./image/background.png";
// import zeniakBoy from "./image/zeniak-boy.png";
// import Hangingpanda from "./image/hangingpanda.png";
// import PandaGif from "./image/panda-giff.gif";
import nft from "./image/mint.png";
import crazyClan from "./image/panda (1).png";
import run from "./image/running (1).png";
import staking from "./image/stake.png";
import nftmarkeplace from './image/marketplace.png';
import auction from './image/winner.png'
import panda1 from "./image/panda-1.png";
import panda2 from "./image/panda-2.png";
import panda3 from "./image/panda-3.png";
import panda4 from "./image/panda-4.png";
import panda5 from "./image/panda-5.png";
import panda6 from './image/panda-6.jpg';

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

        <div className="pandaGridBar">
          <h2 className="h2">
            CrazyPanda is an NFT themed project on the BSC ecosystem. Fusing
            aesthetically pleasing panda art with Run to Earn Gaming.
          </h2>
          <div className="pandaGridBox">
            <div className="pandaBox">
              <div className="text-center">
                <img height={70} width={70} alt="alt1" src={nft} />
              </div>
              <h2 className="h3">CrazyPanda Nfts</h2>
              <p>
                CrazyPanda NFT is the base of the entire project and movement, a
                collection of 3500 Panda Nfts based on Binance Smart Chain led
                by zeniak in search for the secret source of intelligence.
              </p>
            </div>

            <div className="pandaBox">
              <div className="text-center">
                <img height={70} width={70} alt="alt1" src={crazyClan} />
              </div>
              <h2 className="h3">CrazyClan</h2>
              <p>
                An immaculate collection of 3500 diverse pandas that grant you
                exclusive access to the Crazy Clan, where together, we build a
                virtuous community in which members can interact and share value
                through Exclusive merch drops, outdoor campaigns, collaborations
                with other crypto projects and world-renowned brands doing
                social good.
              </p>
            </div>

            <div className="pandaBox">
              <div className="text-center">
                <img height={70} width={70} alt="alt1" src={run} />
              </div>
              <h2 className="h3">Run to Earn</h2>
              <p>
                CrazyPanda features 10 fun, fast paced levels with the degree of
                difficulty increasing as the player progresses. Players must
                navigate over and under obstacles , monsters, water and even a
                volcano raged city to reach the fountain of intelligence and
                complete the game and earn tokens.
              </p>
            </div>

            <div className="pandaBox">
              <div className="text-center">
                <img height={70} width={70} alt="alt1" src={staking} />
              </div>
              <h2 className="h3">Staking</h2>
              <p>
                Holders can either stake their $BAMBOO tokens to earn more
                tokens or access the run to earn game, where winners will
                receive their token rewards, we also have plans in the future to
                have exclusive NFT drops for token holders and NFT holders .
                CrazyPanda NFT holders will have access to special pool where
                they will earn staking rewards in BNB
              </p>
            </div>

            <div className="pandaBox">
              <div className="text-center">
                <img height={70} width={70} alt="alt1" src={nftmarkeplace} />
              </div>
              <h2 className="h3"> Marketplace </h2>
              <p>
                With $BAMBOO token, you will be able to trade in our in
                marketplace , where you can easily sell or buy CrazyPanda Nfts
                as an alternative to opensea . The marketplace will equipped
                with superior features that give you the best trading experience
                and money-making opportunities.
              </p>
            </div>

            <div className="pandaBox">
            <div className="text-center">
                <img height={70} width={70} alt="alt1" src={auction} />
              </div>
              <h2 className="h3">Auctions & Raffle</h2>
              <p>
                There will be several auctions to take place and part of the
                proceeds will be used to buy-back $BAMBOO and burn it. we will
                auction : Selected Whitelist Spots, NFTs exclusive Game Skin,
                Game collectibles and a lot more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section-bg">
        <div className="team-section-container">
          <div className="team-section-text">
            <h1>The Team</h1>
            <div className="team-upper-bar">
              <div>
                <img src={panda1} alt="panda pic" />
                <p>Freddie Panda</p>
                <p className="team-role">Lead Marketer</p>
              </div>
              <div>
                <img src={panda2} alt="panda pic" />
                <p>Shifu Panda</p>
                <p className="team-role">Blockchain Developer</p>
              </div>
              <div>
                <img src={panda3} alt="panda pic" />
                <p>Gway Panda</p>
                <p className="team-role">Game Developer</p>
              </div>
            </div>
            <div className="team-upper-bar">
              <div>
                <img src={panda4} alt="panda pic" />
                <p>Candy Panda</p>
                <p className="team-role">Game Developer</p>
              </div>
              <div>
                <img src={panda5} alt="panda pic" />
                <p>Po Panda</p>
                <p className="team-role">Talented Creative Designer</p>
              </div>
              <div>
                <img src={panda6} alt="panda pic" />
                <p>Koin Panda</p>
                <p className="team-role">Digital Marketer</p>
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
