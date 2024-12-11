// src/Pages/Projects.jsx
import "./Projects.css";
import ProjectGrid from "../Components/ProjectGrid";
import useTypingEffect from "../hooks/typingEffect";
import useShowProjects from "../hooks/useShowProjects";

const Projects = () => {
  const typedText = useTypingEffect("Projects....");
  const showProjects = useShowProjects();
  return (
    <div>
      <h1 className="project-text">{typedText}</h1>
      {showProjects && <ProjectGrid />}
      <p>asdfasfdasdfas</p>
    </div>
  );
};

export default Projects;
