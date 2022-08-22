import React from "react";
import Navbar from "./Navbar";
import Icon from "./image/pandaicon1.png"

const Roadmap = () => {
  return (
    <>
      <section className="staking" style={{}}>
      <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12  staking-box mx-auto">
              <div className="col-8 mx-auto d-flex flex-column align-items-center stakingsection">
                <div className="panda">
                <img src={Icon} alt="" />
                </div>
                <div className="staking-title">Roadmap</div>
              </div>

              <div className="container  ">
                <div className="row ">
                  <div className="col-12 d-flex justify-content-center flex-column mx-auto mb-0">
                    {/* { first row } */}
                    <div className="d-flex flex-wrap stakingtext">
                      <div className="col-lg-2.4 col-md-4 col-sm-12 text-center mb-4">
                        <h1>Phase 1</h1>
                        <h5>1. Website development</h5>
                        <h5>2. Contract deployment</h5>
                        <h5>3. Community Building</h5>
                        <h5>4. Kyc and Audit</h5>
                        <h5>5. NFT/Game devepment</h5>
                      </div>

                      <div className="col-lg-2.4 col-md-4 col-sm-12 text-center mb-4">
                        <h1>Phase 2</h1>
                        <h5>1. KOL Marketing</h5>
                        <h5>2. AMAs</h5>
                        <h5>3. Community contest</h5>
                        <h5>4. Token presale</h5>
                        <h5>5. NFT mint</h5>
                      </div>

                      <div className="col-lg-2.4 col-md-4 col-sm-12 text-center mb-4">
                        <h1>Phase 3</h1>
                        <h5>1. Token launch</h5>
                        <h5>2. Liquidity lock /Dex Listing</h5>
                        <h5>3. CMC and CG listing</h5>
                        <h5>4. Dextoold trending</h5>
                        <h5>5. Stake launch for NFT holders</h5>
                      </div>

                      <div className="col-lg-2.4 col-md-4 col-sm-12 text-center mb-4">
                        <h1>Phase 4</h1>
                        <h5>1. Game launch</h5>
                        <h5>2. Game tournment</h5>
                        <h5>3. CEX Listing</h5>
                        <h5>4. CoinMarketCap trending</h5>
                        <h5>5. Twitter Trending</h5>
                      </div>

                      <div className="col-lg-2.4 col-md-4 col-sm-12 text-center mb-4">
                        <h1>Phase 5</h1>
                        <h5>1. Launch of ios and andriod app</h5>
                        <h5>2. Key partnerships</h5>
                        <h5>3. Exclusive CrazyPanda Merch</h5>
                        <h5>4. Major CEX Listing</h5>
                        <h5>5. Latest Roadmap</h5>
                      </div>
                    </div>
                    {/* { second row } */}
                    <div className="d-flex justify-content-around col-12 text-center">
                      <div className="walletcss ">
                        Connect Wallet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
