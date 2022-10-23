import { projects } from "../../Constants/projects";
import ProjectDiv from "./ProjectDiv";
const Portfolio = () => {
  const insertProjects = () => {
    return projects.map((project) => {
      return <ProjectDiv project={project} key={project.id} id={project.id} />;
    });
  };
  return (
    <section id="portfolio">
      <div className="title">
        <h1>
          <span style={{ color: "rgb(38, 0, 121)" }}>My Projects</span>
        </h1>
      </div>
      <div className="portfolio-container">{insertProjects()}</div>
    </section>
  );
};

export default Portfolio;
