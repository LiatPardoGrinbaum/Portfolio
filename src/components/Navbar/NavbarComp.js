import React from "react";
import { Link } from "react-scroll";
const NavbarComp = ({ isMobile, setIsMobile }) => {
  return (
    <>
      <ul className={isMobile ? "navbar-mobile" : "navbar"}>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() =>
              setIsMobile((prev) => {
                if (isMobile) return !prev;
              })
            }>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={() =>
              setIsMobile((prev) => {
                if (isMobile) return !prev;
              })
            }>
            About
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={() =>
              setIsMobile((prev) => {
                if (isMobile) return !prev;
              })
            }>
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={() =>
              setIsMobile((prev) => {
                if (isMobile) return !prev;
              })
            }>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarComp;
