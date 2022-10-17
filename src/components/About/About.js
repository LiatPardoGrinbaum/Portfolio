import React from "react";
import Skill from "./Skill";
import reactIcon from "../../assets/skills-icons/react-icon.png";
import nodeIcon from "../../assets/skills-icons/node-icon.png";
import sassIcon from "../../assets/skills-icons/sass-icon.png";
import gitIcon from "../../assets/skills-icons/git-icon.png";
import htmlIcon from "../../assets/skills-icons/html5-icon.png";
import cssIcon from "../../assets/skills-icons/css3-icon.png";
import mongodbIcon from "../../assets/skills-icons/mongodb-icon.png";
import javascriptIcon from "../../assets/skills-icons/javascript-icon.png";
import mysqlIcon from "../../assets/skills-icons/mysql-icon.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="title">
          <h1>
            <span style={{ color: "rgb(38, 0, 121)" }}>About</span>{" "}
            <span style={{ color: "rgb(252, 247, 255)" }}>Me</span>
          </h1>
        </div>
        <div className=" content">
          <p className="content-text">
            I grduated Appleseeds Academy Full stack Bootcamp, and hold a bachelor degree in civil engineering from the
            Technion. <br></br>I have hands on experience with front-end and back-end technologies from the bootcamp and
            as an intern in a start-up company, and I keep learning all the time.<br></br>I have a passion for coding
            and making great UI designs and currently looking for a position as a full stack developer.<br></br>
            <br></br>
          </p>
        </div>
        <div className="title">
          <h1>
            <strong style={{ textAlign: "center" }}>My skills:</strong>
          </h1>
        </div>

        <div className=" skills">
          <div className="skills-container">
            <Skill skillImg={htmlIcon} skillTitle="HTML5" />
            <Skill skillImg={cssIcon} skillTitle="CSS3" />
            <Skill skillImg={javascriptIcon} skillTitle="JavaScript" />
            <Skill skillImg={reactIcon} skillTitle="React" />
            <Skill skillImg={sassIcon} skillTitle="Sass" />
            <Skill skillImg={nodeIcon} skillTitle="Node.js" />
            <Skill skillImg={gitIcon} skillTitle="Git" />
            <Skill skillImg={mongodbIcon} skillTitle="mongoDB" />
            <Skill skillImg={mysqlIcon} skillTitle="mySQL" />
          </div>

          {/* Skills icons by
          <a target="blank" href="https://icons8.com">
            Icons8
          </a>
          <p>links</p>*/}
        </div>
      </div>
    </section>
  );
};

export default About;
