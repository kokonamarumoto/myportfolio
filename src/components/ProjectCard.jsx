import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card-link">
      <article className="project-card">

          


         <div className="project-card__image">
          <img src={project.thumbnail} alt={project.title} />
        </div>

       <div className="project-card__text">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-sum">{project.summary}</p>

        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

       </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
