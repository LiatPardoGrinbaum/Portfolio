import React from "react";

const Header = () => {
  return (
    <div className="header-container">
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
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
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
