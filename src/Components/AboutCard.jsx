import React from 'react';
import './AboutCard.css';
import MatrixAnimation from './MatrixAnimation';

const AboutCard = () => {
  return (
    <>
      <MatrixAnimation />
      <div className='about-card-container'>
        <div className='about-card'>
          <div className='about-header'>
            <img
              src='/portfolio.jpeg'
              alt='Clint Arneson-Hiles'
              className='about-image'
            />
            <h2 className='about-name'>Clint Arneson-Hiles</h2>
            <p className='about-title'>Full Stack Developer</p>
          </div>
          <div className='about-content'>
            <p>
              Former heavy equipment operator turned passionate web developer.
              My journey into tech wasn't traditional I spent years operating
              heavy equipment across various industries before pivoting to
              pursue my true passion: coding.
            </p>
            <p>
              Graduating from Lighthouse Labs' Web Development Bootcamp in
              September 2024 marked a significant turning point, equipping me
              with practical skills and the confidence to build full-stack
              applications. I specialize in JavaScript, React, Ruby on Rails,
              Express, HTML, SCSS, SQL, and am continually expanding my skillset
              with technologies like Redux and TypeScript.
            </p>
            <p>
              I thrive when I'm hands-on, whether it's building a custom Google
              Chrome extension to enhance browsing experiences or developing
              full-stack projects that solve real-world problems. Recent
              projects include Context-Aware Notepad, which allows users to save
              and retrieve notes tied directly to specific websites, and
              T.L.D.R, a Chrome extension leveraging the ChatGPT API to
              summarize web pages instantly.
            </p>
            <p>
              I'm always excited to build new projects that challenge me, help
              me grow, and expand my understanding. For me, every project is an
              opportunity to dive deeper into the technologies I love, learn
              something new, and continuously refine my skills as a developer.
            </p>
            <div className='about-interests'>
              <h3>Interests</h3>
              <ul>
                <li>Web Development</li>
                <li>Clean Code Architecture</li>
                <li>User Experience Design</li>
                <li>Learning new things</li>
                <li>Hiking</li>
                <li>Music</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
