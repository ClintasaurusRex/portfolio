import React from 'react';
import { NavLink } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  return (
    <div className='cta-section'>
      <h2 className='section-title'>Let's Work Together</h2>
      <p className='lead'>
        Looking for a dedicated developer for your next project?
      </p>
      <NavLink to='/contact' className='cta-button'>
        Get In Touch <i className='bi bi-arrow-right'></i>
      </NavLink>
    </div>
  );
};

export default CTASection;
