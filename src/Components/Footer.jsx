import './footer.css';
import React from 'react';
import useTypingEffect from '../hooks/typingEffect';

const Footer = () => {
  const successLink =
    'link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover';

  const copywriteText = useTypingEffect(
    '© 2024 Clint Arneson-Hiles. Minty Fresh Codeworks. All rights reserved.'
  );

  return (
    <footer className='footer-container'>
      <p className={successLink} id='copywrite'>
        {copywriteText}
      </p>
    </footer>
  );
};

export default Footer;
