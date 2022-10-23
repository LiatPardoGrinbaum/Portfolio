import React from "react";

const Skill = ({ skillImg, skillTitle }) => {
  return (
    <div className="skill-box tooltip">
      <img src={skillImg} alt={skillTitle} />

      <div className="bottom">
        <h3>{skillTitle}</h3>
        <i></i>
      </div>
    </div>
  );
};

export default Skill;
