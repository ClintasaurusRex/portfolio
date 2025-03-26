import './projectCard.css';
import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  // Function to get the correct image based on project title
  const getProjectImage = (title) => {
    switch (title) {
      case 'T.L.D.R':
        return '/portVids/tldr.mp4';
      case 'Joyland Prime Academy':
        return '/portVids/joyland.mp4';
      case 'Siding Business':
        return '/portVids/shaung.mp4';
      case 'Minty Fresh Codeworks':
        return '/portVids/mintyFresh.mp4';
      case 'Wyatt Wiebe Wellness Center':
        return '/portVids/wwch.mp4';
      default:
        return '/portfolio.jpeg'; // fallback image
    }
  };

  const isVideo = (src) => src.endsWith('.mp4');

  return (
    <div className='project-card' onClick={() => onClick(project)}>
      <h3>{project.title}</h3>

      <p>{project.summary}</p>

      {isVideo(getProjectImage(project.title)) ? (
        <video
          className='project-hover-image'
          muted
          loop
          playsInline
          autoPlay
          loading='lazy'
        >
          <source src={getProjectImage(project.title)} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={getProjectImage(project.title)}
          alt={`${project.title} Preview`}
          className='project-hover-image'
          loading='lazy'
        />
      )}
    </div>
  );
};

export default ProjectCard;
