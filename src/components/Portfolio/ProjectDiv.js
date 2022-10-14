import React from "react";

const ProjectDiv = ({ project }) => {
  return (
    <div className="project-box">
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectDiv;
