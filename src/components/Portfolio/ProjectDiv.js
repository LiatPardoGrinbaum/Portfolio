import React from "react";

const ProjectDiv = ({ project, id }) => {
  return (
    <div className="project-box">
      <div className="project-box-inner">
        <div className="project-image">
          <a href={project.demo} target="blank">
            <img src={project.image} alt={project.name} />
          </a>
        </div>
        <div className="project-content">
          <h3>{project.name}</h3>
          <p className="content-text " style={{ whiteSpace: "break-spaces" }}>
            <span style={{ color: " rgb(103, 73, 168)" }}>
              <strong>Description:</strong>
            </span>{" "}
            {project.description}
          </p>
          <p className="content-text " style={{ whiteSpace: "break-spaces" }}>
            <span style={{ color: " rgb(103, 73, 168)" }}>
              <strong>Technologies:</strong>
            </span>{" "}
            {project.technologies}
          </p>
          <div className="icon-links">
            <a href={project.demo} target="blank" className="tooltip">
              <i className="fa-solid fa-link"></i>
              <div className="bottom" style={{ top: "20px" }}>
                <h3 style={{ color: " rgba(39, 135, 93, 0.67)" }}>Demo</h3>
                <i></i>
              </div>
            </a>
            {project.video && (
              <a href={project.video} target="blank" className="tooltip">
                <i className="fa-solid fa-video"></i>
                <div className="bottom" style={{ top: "20px" }}>
                  <h3 style={{ color: " rgba(39, 135, 93, 0.67)" }}>Video</h3>
                  <i></i>
                </div>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="blank" className="tooltip">
                <i className="fa-brands fa-github"></i>
                <div className="bottom" style={{ top: "20px" }}>
                  <h3 style={{ color: " rgba(39, 135, 93, 0.67)" }}>Github</h3>
                  <i></i>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDiv;
