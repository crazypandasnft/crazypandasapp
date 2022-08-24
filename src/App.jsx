import React, { useState, useEffect } from "react";
import Main from "./Main";
import Loader from "./Loader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.body.classList.add('overflow-hidden');
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('overflow-hidden');
    }, 9000);
  }, []);

  return (
    <>

      {/* { loading ? <Loader/> : "" } */}
      <Main/>

    </>
  );
};

export default App;
