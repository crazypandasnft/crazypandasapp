import React from 'react';
import Gif from './image/loader.gif';
// import DotLoader from "react-spinners/DotLoader";

const Loader = () => {
  return (
    <>
          <div className="loader">
        {/* <DotLoader color={"#41F409"}  size={150} /> */}
        <img src={Gif} alt="" />
      </div>
    </>
  )
}

export default Loader