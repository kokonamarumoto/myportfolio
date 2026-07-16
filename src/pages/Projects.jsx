import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      
      
          <h2 className="section-title">Projects</h2>
          <p className="description">これまでに制作した作品です。クリックすると詳細ページへ移動します。</p>



          <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </div>
      
      
    </section>
  );
};
