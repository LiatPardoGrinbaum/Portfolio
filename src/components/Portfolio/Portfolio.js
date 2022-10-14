import { projects } from "../../Constants/projects";
import ProjectDiv from "./ProjectDiv";
const Portfolio = () => {
  const insertProjects = () => {
    return projects.map((project) => {
      return <ProjectDiv project={project} />;
    });
  };
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        {/* <div className="box content">
          <div className="title">
            <h1>Portfolio</h1>
            <p>ddd</p>
          </div>
        </div> */}
        {insertProjects()}
      </div>
    </section>
  );
};

export default Portfolio;
