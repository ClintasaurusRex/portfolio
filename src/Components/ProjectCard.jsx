import './projectCard.css';
import React from 'react';
const ProjectCard = ({ project, onClick }) => {
  // Function to get the correct image based on project title
  const getProjectImage = (title) => {
    switch (title) {
      case 'Joyland Prime Academy':
        return '/projectPhoto/Joyland.png';
      case 'Siding Business':
        return '/projectPhoto/siding.png';
      case 'T.L.D.R':
        return '/projectPhoto/tldr.png';
      case 'Jungle':
        return '/projectPhoto/jungle-cart.png';
      case 'PhotoLabs':
        return '/projectPhoto/photolabs.png';
      default:
        return '/portfolio.jpeg'; // fallback image
    }
  };

  return (
    <div className='project-card' onClick={() => onClick(project)}>
      <h3>{project.title}</h3>

      <p>{project.summary}</p>
      <img
        src={getProjectImage(project.title)}
        alt={`${project.title} Preview`}
        className='project-hover-image'
        loading='lazy'
      />
    </div>
  );
};

export default ProjectCard;
