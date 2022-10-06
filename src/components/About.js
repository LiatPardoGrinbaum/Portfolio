import React from "react";
import Skill from "./Skill";
import reactIcon from "../assets/skills-icons/react-icon.png";
import nodeIcon from "../assets/skills-icons/node-icon.png";
import sassIcon from "../assets/skills-icons/sass-icon.png";
import gitIcon from "../assets/skills-icons/git-icon.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="content">
          <div className="title">
            <h1>About me</h1>
          </div>
          <p>lorem </p>
          <p>lorem </p>
          <p>lorem </p>
          <p>lorem </p>
          <p>lorem </p>
          <p>lorem </p>
          <p>lorem </p>
          <p>lorem </p>
        </div>
        <div className="skills">
          <div className="title">
            <h1>My Skills</h1>
          </div>
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
