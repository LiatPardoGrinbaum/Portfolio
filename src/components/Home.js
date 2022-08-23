import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <div className="home-inner">
        <div className="home-inner-left">
          <h1 className="span_white">Hello,</h1>
          <h1 className="span_purple"> I am Liat</h1>

          <h1 className="span_white">A Full Stack Developer</h1>

          <a href="/somefile.txt" download>
            <button>
              <i class="fa-solid fa-file-arrow-down"></i>
              Download Resume
            </button>{" "}
          </a>
        </div>
        <div className="home-inner-right">
          <div className="home-inner-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
