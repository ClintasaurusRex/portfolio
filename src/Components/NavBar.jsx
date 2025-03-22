import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = () => {
  // const handleNavToggle = () => {
  //   const backdrop = document.querySelector('.navbar-backdrop');
  //   if (backdrop) {
  //     backdrop.classList.toggle('show');
  //   }
  // };

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
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-between'
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
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className='navbar-backdrop' onClick={handleNavToggle}></div> */}
      </div>
    </nav>
  );
};

export default NavBar;
