import React, { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  window.addEventListener("scroll", changeNavbarStyle);
  function changeNavbarStyle() {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  return (
    <div className={navbar ? "header-container navbar-active" : "header-container "}>
      {/* //!add smooth scrool when click links on the same page */}
      <div className="header-inner">
        <div className="logo">
          <h2>Liat Pardo Grinbaum</h2>
        </div>
        <ul className="navbar">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>

          <a href="#projects">
            <li>Portfolio</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
