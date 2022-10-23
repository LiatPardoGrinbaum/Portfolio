import React from "react";
import Skill from "./Skill";

import { skills } from "../../Constants/skills";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="title">
          <h1>
            <span style={{ color: "rgb(38, 0, 121)" }}>About Me</span>
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
            {skills.map((skill) => {
              return <Skill skillImg={skill.skillImg} skillTitle={skill.skillTitle} />;
            })}
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
