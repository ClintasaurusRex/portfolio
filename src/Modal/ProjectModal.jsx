import './ProjectModal.css';
import React from 'react';
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className='modal-backdrop' data-testid='modal-backdrop'>
      <div className='modal-content' data-testid='modal-content'>
        <button className='close-button' onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.challenges}</p>

        <div className='tech-icons'>
          {project.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt='Technology Icon'
              className={`tech-icon ${
                tech.includes('react.svg') ? 'react-spin' : ''
              }`}
            />
          ))}
        </div>

        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-outline-success btn-lg mt-3'
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
