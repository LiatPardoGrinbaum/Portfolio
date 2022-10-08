import React from "react";
import Skill from "./Skill";
import reactIcon from "../../assets/skills-icons/react-icon.png";
import nodeIcon from "../../assets/skills-icons/node-icon.png";
import sassIcon from "../../assets/skills-icons/sass-icon.png";
import gitIcon from "../../assets/skills-icons/git-icon.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="box content">
          <div className="title">
            <h1>About me</h1>
          </div>
          <p className="content-text">
            I grduated Appleseeds Academy Full stack Bootcamp, and hold a bachelor degree in civil engineering from the
            Technion. <br></br>I have a passion for coding and making great UI designs, and currently looking for a
            position as a full stack developer.
          </p>
          <br></br>

          <br></br>
        </div>
        <div className="box skills">
          <h1 className="content-subtitle">My Skills</h1>
          <br></br>
          <div className="skills-container">
            <Skill skillImg={reactIcon} skillTitle="React" />
            <Skill skillImg={sassIcon} skillTitle="Sass" />
            <Skill skillImg={nodeIcon} skillTitle="Node.js" />
            <Skill skillImg={gitIcon} skillTitle="Git" />
            <Skill skillImg={reactIcon} skillTitle="React" />
            <Skill skillImg={sassIcon} skillTitle="Sass" />
            <Skill skillImg={nodeIcon} skillTitle="Node.js" />
            <Skill skillImg={gitIcon} skillTitle="Git" />
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
