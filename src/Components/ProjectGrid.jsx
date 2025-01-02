import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../Modal/ProjectModal";
import "./ProjectGrid.css";

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "T.L.D.R",
      summary: "A google chrome extension that summarizes articles.",
      description:
        "This extension summarizes and saves web articles for later reading. The extension also provides a text box that the user can talk directly to chatGPT with.",
      challenges:
        "The biggest challenge was working with the chatGPT API and getting the extension to work with the API and this was our first and only extension that my partner and I made. Learning webpack and how to use it was also a challenge.",
      link: "https://chromewebstore.google.com/detail/tldr/fdoabojpkjopijhpfhapkddbafljjfff?hl=en-US&utm_source=ext_sidebar",
    },
    {
      id: 2,
      title: "Task Manager",
      summary: "Organize your tasks efficiently.",
      description:
        "A task management app with a sleek user interface. Add, edit, and delete tasks, set deadlines, and track progress. Built with React and localStorage for data persistence.",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      summary: "Showcase your work online.",
      description:
        "A personal portfolio website template designed for web developers to showcase their projects and skills. Fully responsive and customizable.",
      link: "#",
    },
    {
      id: 4,
      title: "E-Commerce Site",
      summary: "Mock online shopping platform.",
      description:
        "A prototype e-commerce website with product listings, a shopping cart, and a checkout process. Features product filtering and sorting.",
      link: "#",
    },
    {
      id: 5,
      title: "Recipe Finder",
      summary: "Discover new recipes with ease.",
      description:
        "A recipe search engine that lets you find recipes by ingredients or cuisine. Features include a favorites list and step-by-step instructions.",
      link: "#",
    },
  ];

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
      ))}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default ProjectGrid;
