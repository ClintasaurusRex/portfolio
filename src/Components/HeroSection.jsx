import React from 'react';
import { NavLink } from 'react-router-dom';
import useTypingEffect from '../hooks/typingEffect';
import './HeroSection.css';

const HeroSection = () => {
  const welcomeText = useTypingEffect('Clint Arneson-Hiles');
  const leadText =
    "I'm Clint, a full-stack web developer specializing in React, JavaScript, Ruby on Rails, and Node.js. Passionate about crafting clean, user-focused applications, I transitioned from heavy equipment operation to tech, driven by curiosity and continuous learning.";

  return (
    <div className='hero-section'>
      <div className='container'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2 className='display-1' data-testid='welcome-text'>
              {welcomeText}
            </h2>
            <p className='lead'>{leadText}</p>
            <nav className='nav-homebtns'>
              <NavLink to='/about' className='btn btn-success'>
                <i className='bi bi-person-circle'></i> About
              </NavLink>
              <NavLink to='/projects' className='btn btn-success'>
                <i className='bi bi-code-square'></i> Projects
              </NavLink>
              <NavLink to='/contact' className='btn btn-success'>
                <i className='bi bi-envelope'></i> Contact
              </NavLink>
              <a
                href='/code-resume-port.pdf'
                download='Clint-Arneson-Hiles-Resume.pdf'
                className='btn btn-success'
              >
                <i className='bi bi-file-earmark-pdf'></i> Download Resume
              </a>
            </nav>
          </div>
          <div className='hero-image'>
            <img
              src='/portfolio.jpeg'
              alt='Clint Arneson-Hiles'
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
