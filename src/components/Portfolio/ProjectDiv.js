import React from "react";

const ProjectDiv = ({ project }) => {
  return (
    <div className="project-box">
      <div className="project-image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-content"></div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectDiv;
