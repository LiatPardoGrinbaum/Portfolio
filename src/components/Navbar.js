import React, { useState } from "react";
import { Link } from "react-scroll";

//! need to fix dropdown logics and css!!!

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
      {/* add smooth scrool when click links on the same page */}
      <div className="navbar-inner">
        <div className="logo">
          <h2>Liat Pardo Grinbaum</h2>
        </div>
        <ul className={isMobile ? "navbar-mobile" : "navbar"} onClick={() => setIsMobile((prev) => !prev)}>
          <li>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
              about
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
