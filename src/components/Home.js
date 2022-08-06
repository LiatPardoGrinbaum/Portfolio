import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <div className="home-inner">
        <h1>
          I am <span className="span_purple">Liat</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
