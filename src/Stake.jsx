import React from "react";
import Navbar from "./Navbar";
import Icon from "./image/pandaicon1.png"

const Stake = () => {
  return (
    <>
  
      <section className="staking">
      <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10  staking-box mx-auto">
              <div className="col-8 mx-auto d-flex flex-column align-items-center stakingsection">
                <div className="panda">
                <img src={Icon} alt="" />
                </div>
                <div className="staking-title">PANDA STAKING</div>
              </div>

              <div className="container  ">
                <div className="row ">
                  <div className="col-10 d-flex justify-content-center flex-column mx-auto mb-4">
                    {/* { first row } */}
                    <div className="d-flex justify-content-between stakingtext">
                      <div className="col-lg-4 text-center ">
                        <p>Total CrazyPanda Staked</p>
                        <h1>1025</h1>
                      </div>

                      <div className="col-lg-4 text-center ">
                        <p>% of CrazyPanda Staked</p>
                        <h1>10.3% </h1>
                      </div>

                      <div className="col-lg-4 text-center ">
                        <p>Minimum Value Locked</p>
                        <h1> $15,556,809</h1>
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

export default Stake;
