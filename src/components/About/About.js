import React from "react";
import Skill from "./Skill";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

import { skills } from "../../Constants/skills";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="title">
          <h1>
            <span style={{ color: "rgb(38, 0, 121)" }}>..• About Me •..</span>
          </h1>
        </div>
        <Fade left duration={2000}>
          <div className=" content">
            <p className="content-text">
              I have graduated from Appleseeds' Full stack Bootcamp, and hold a bachelor degree in civil engineering
              from the Technion. <br></br>I have hands on experience with front-end and back-end technologies from the
              bootcamp and as an intern in a start-up company, and I keep learning all the time.<br></br>I love coding
              and have a real passion for frontend development, and I'm currently looking for a position as a full stack
              or frontend developer.<br></br>
              <br></br>
            </p>
          </div>{" "}
        </Fade>
        <div className="title">
          <h1>
            <strong style={{ textAlign: "center" }}>My skills:</strong>
          </h1>
        </div>

        <div className=" skills">
          <div className="skills-container">
            <Rotate top right duration={2000}>
              {skills.map((skill) => {
                return <Skill skillImg={skill.skillImg} skillTitle={skill.skillTitle} key={skill.skillTitle} />;
              })}
            </Rotate>
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
