import React from "react";
import Navbar from "../components/Navbar/Navbar";
// import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="home-inner">
        {/* <Fade left duration={2000}> */}
        <div className="home-inner-left">
          <h1 className="span_white">Hello,</h1>
          <h1 className="span_purple"> I am Liat</h1>

          <h1 className="span_white">A Full Stack Developer</h1>
          {/*  <a href="https://www.freepik.com/photos/dark-purple">
            Dark purple photo created by rawpixel.com - www.freepik.com
          </a> */}
          <a
            href="https://drive.google.com/file/d/1kV1sCEKfzwpRILr08Zwbom-iDtwKMKkY/view?usp=sharing"
            download
            target="blank">
            <button>
              <i className="fa-solid fa-file-arrow-down"></i>
              Download Resume
            </button>{" "}
          </a>
        </div>
        {/* </Fade> */}
        {/* <Fade right duration={2000}> */}
        <div className="home-inner-right">
          <div className="home-inner-image"></div>
        </div>
        {/*  </Fade> */}
      </div>
    </div>
  );
};

export default Home;
