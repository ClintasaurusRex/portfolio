import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'></NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={isNavOpen}
          aria-label='Toggle navigation'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${
            isNavOpen ? 'show' : ''
          }`}
          id='navbarNav'
        >
          <ul
            className='nav nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm custom-nav-pills'
            id='pillNav2'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active rounded-5' : 'nav-link rounded-5'
                }
                to='/'
                role='tab'
                onClick={handleNavClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item' role='presentation'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active rounded-5' : 'nav-link rounded-5'
                }
                to='/projects'
                role='tab'
                onClick={handleNavClick}
              >
                Projects
              </NavLink>
            </li>
            <li className='nav-item' role='presentation'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active rounded-5' : 'nav-link rounded-5'
                }
                to='/about'
                role='tab'
                onClick={handleNavClick}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item' role='presentation'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active rounded-5' : 'nav-link rounded-5'
                }
                to='/contact'
                role='tab'
                onClick={handleNavClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
