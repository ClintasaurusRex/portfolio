import './projectCard.css';
import React from 'react';
const ProjectCard = ({ project, onClick }) => {
  return (
    <div className='project-card' onClick={() => onClick(project)}>
      <h3>{project.title}</h3>

      <p>{project.summary}</p>
      <img
        src='/portfolio.jpeg' // Using the same image path as in your Home page
        alt='Project Preview'
        className='project-hover-image'
      />
    </div>
  );
};

export default ProjectCard;
