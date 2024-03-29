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
              I have graduated from Appleseeds' Full stack Bootcamp, and hold a B.Sc. in civil engineering from the
              Technion I.I.T. I have hands-on experience with front-end and back-end technologies from Appleseeds'
              Bootcamp and as an intern in a start-up company. <br></br> I love coding and have a real passion for
              implementing and developing new solutions. I enjoy learning new technologies, have great communication
              skills, and I am currently looking for a new opportunity in the tech industry.
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
