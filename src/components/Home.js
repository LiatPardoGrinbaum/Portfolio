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

          <div className="contact-homepage">
            <a href="mailto:pardo.liat@gmail.com">
              {" "}
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/liat-pardo-grinbaum-43932b146/" target="blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/LiatPardoGrinbaum" target="blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
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
