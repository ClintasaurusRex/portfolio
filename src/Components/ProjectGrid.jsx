import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../Modal/ProjectModal";
import "./ProjectGrid.css";

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Weather App",
      summary: "Get real-time weather updates.",
      description:
        "A weather forecasting app that uses the OpenWeatherMap API to display real-time weather information for your location. Features include temperature, humidity, and a 7-day forecast.",
      link: "#",
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
