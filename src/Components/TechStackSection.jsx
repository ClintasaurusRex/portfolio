import React from 'react';
import useTypingEffect from '../hooks/typingEffect';
import './TechStackSection.css';

const TechStackSection = () => {
  const techStack = useTypingEffect('Tech Stack');

  return (
    <div className='skills-section'>
      <h2 className='section-title'>{techStack}</h2>
      <div className='skills-grid'>
        <TechStackCard
          title='Frontend'
          icons={[
            { src: '/frontEnd/react.svg', alt: 'React', tooltip: 'React' },
            {
              src: '/frontEnd/typescript.svg',
              alt: 'TypeScript',
              tooltip: 'TypeScript',
            },
            {
              src: '/frontEnd/javascript.svg',
              alt: 'JavaScript',
              tooltip: 'JavaScript',
            },
            { src: '/frontEnd/html5.svg', alt: 'HTML5', tooltip: 'HTML5' },
            { src: '/frontEnd/css.svg', alt: 'CSS', tooltip: 'CSS' },
            {
              src: '/frontEnd/tailwindcss.svg',
              alt: 'Tailwind',
              tooltip: 'Tailwind',
            },
            {
              src: '/frontEnd/bootstrap.svg',
              alt: 'Bootstrap',
              tooltip: 'Bootstrap',
            },
            {
              src: '/frontEnd/mui.svg',
              alt: 'Material UI',
              tooltip: 'Material UI',
            },
          ]}
        />
        <TechStackCard
          title='Backend'
          icons={[
            {
              src: '/backEnd/nodedotjs.svg',
              alt: 'Node.js',
              tooltip: 'Node.js',
            },
            { src: '/backEnd/express.svg', alt: 'Express', tooltip: 'Express' },
            {
              src: '/backEnd/rubyonrails.svg',
              alt: 'Ruby on Rails',
              tooltip: 'Ruby on Rails',
            },
            { src: '/backEnd/python.svg', alt: 'Python', tooltip: 'Python' },
            {
              src: '/backEnd/firebase.svg',
              alt: 'Firebase',
              tooltip: 'Firebase',
            },
          ]}
        />
        <TechStackCard
          title='Database'
          icons={[
            {
              src: '/database/postgresql.svg',
              alt: 'PostgreSQL',
              tooltip: 'PostgreSQL',
            },
            { src: '/database/mysql.svg', alt: 'MySQL', tooltip: 'MySQL' },
            {
              src: '/database/mongodb.svg',
              alt: 'MongoDB',
              tooltip: 'MongoDB',
            },
            {
              src: '/database/firebase.svg',
              alt: 'Firebase',
              tooltip: 'Firebase',
            },
          ]}
        />
        <TechStackCard
          title='Development Tools'
          icons={[
            { src: '/additional/git.svg', alt: 'Git', tooltip: 'Git' },
            { src: '/additional/github.svg', alt: 'GitHub', tooltip: 'GitHub' },
            { src: '/additional/linux.svg', alt: 'Linux', tooltip: 'Linux' },
          ]}
        />
      </div>
    </div>
  );
};

const TechStackCard = ({ title, icons }) => (
  <div className='skill-card'>
    <h3>{title}</h3>
    <div className='tech-icons'>
      {icons.map((icon, index) => (
        <div key={index} className='tech-icon-wrapper'>
          <img src={icon.src} alt={icon.alt} className='tech-icon' />
          <span className='tooltip-text'>{icon.tooltip}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechStackSection;
