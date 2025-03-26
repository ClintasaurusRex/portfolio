import './projectCard.css';
import React, { useState, useRef } from 'react';

const ProjectCard = ({ project, onClick }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
        return '/portfolio.jpeg';
    }
  };

  const isVideo = (src) => src.endsWith('.mp4');

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className='project-card'
      onClick={() => onClick(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{project.title}</h3>

      <p>{project.summary}</p>

      {isVideo(getProjectImage(project.title)) ? (
        <video
          ref={videoRef}
          className='project-hover-image'
          muted
          loop
          playsInline
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
