import React from "react";
import Navbar from "./Navbar";
import Icon from "./image/pandaicon1.png"

const Tokenomics = () => {
  return (
    <>
      <section className="staking" style={{}}>
      <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12  staking-box mx-auto">
              <div className="col-8 mx-auto d-flex flex-column align-items-center">
                <div className="panda">
                <img src={Icon} alt="" />
                </div>
                <div className="staking-title">Token Breakdown</div>
              </div>

              <div className="container  ">
                <div className="row ">
                  <div className="col-12 d-flex justify-content-center flex-column mx-auto mb-0">
                    {/* { first row } */}
                    <div className="tokenGridBox">
                        <div className="tokenBox">
                        <h2>Token Name and Symbol</h2>
                        <p>
                            ($BAMBOO)
                        </p>
                        </div>

                        <div className="tokenBox">
                        <h2>Total Supply($BAMBOO)</h2>
                        <p>
                            1 Billion
                        </p>
                        </div>

                        <div className="tokenBox">
                        <h2>Initial Market Cap</h2>
                        <p>
                            $89,000
                        </p>
                        </div>
                    </div>

                    <h2 className="tokenDistributionHeader">Token Distribution and Vesting Schedule</h2>
                    <div className="tokenTable">
                        <div className="tokenColumn">
                        <h2>Token Distribution</h2>
                        <p>Presale/Initial Liquidity</p>
                        <p>Play to Earn/Staking Rewards</p>
                        <p>Marketing</p>
                        <p>Team</p>
                        <p>Commuinity Dev</p>
                        <p>Airdrop/Giveaway</p>
                        </div>

                        <div className="tokenColumn">
                        <h2 className="tokenHeader">100.0% </h2>
                        <p>46.5%</p>
                        <p>34.0%</p>
                        <p>6.0%</p>
                        <p>6.0%</p>
                        <p>5.0%</p>
                        <p>2.5%</p>
                        </div>

                        <div className="tokenColumn">
                        <h2 className="tokenHeader">1,000,000,000</h2>
                        <p>465,000,000</p>
                        <p>340,000,000</p>
                        <p>60,000,000</p>
                        <p>60,000,000</p>
                        <p>50,000,000</p>
                        <p>25,000,000</p>

                        </div>

                        <div className="tokenColumn">
                        <h2 className="tokenHeader"> </h2>
                        <p>Liquidity distribution for dex</p>
                        <p>FOR Game rewards and staking benefit in need arise</p>
                        <p>10% upon exchange listing and 10% every month after</p>
                        <p>3 months cliffed, 10% every month after</p>
                        <p>2 months cliff, for future initiative</p>
                        <p>100% two weeks after TGE</p>
                        </div>
                    </div>
                    <div className="tokenSale">
                        <div className="tokenSaleColumn">
                        <h2>Sale</h2>
                        <h2 style={{fontSize:'25px'}}>Presale & Initial Liquidity</h2>
                        </div>

                        <div className="tokenSaleColumn">
                        <h2>% Of Token</h2>
                        <h2>46.5%</h2>
                        </div>

                        <div className="tokenSaleColumn">
                        <h2>1 BNB to BAMBOO</h2>
                        <h2>630,000</h2>
                        </div>

                        <div className="tokenSaleColumn">
                        <h2>Vesting Schedule</h2>
                        <h2 style={{fontSize:'20px'}}>60% Released at TGE, <br/> 10% Weekly , <br/>1 month after listing</h2>
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

export default Tokenomics;
