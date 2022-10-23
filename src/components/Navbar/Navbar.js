import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import NavbarComp from "./NavbarComp";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  window.addEventListener("scroll", changeNavbarStyle);
  function changeNavbarStyle() {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("resize", handleResize);
  function handleResize() {
    if (window.innerWidth >= 900) {
      setIsMobile(false);
    }
  }

  console.log(isMobile);
  return (
    <div className={navbar ? "navbar-container navbar-active" : "navbar-container "}>
      <Fade top duration={2000} style={{ margin: "0rem" }}>
        <div className="navbar-inner">
          <div className="logo">
            <h2>Liat Pardo Grinbaum</h2>
          </div>

          <NavbarComp setIsMobile={setIsMobile} isMobile={isMobile} />

          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Navbar;
