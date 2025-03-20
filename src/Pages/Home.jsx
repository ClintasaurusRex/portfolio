import MatrixAnimation from '../Components/MatrixAnimation';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import useTypingEffect from '../hooks/typingEffect';
import './home.css';

function Home() {
  const welcomeText = useTypingEffect('Clint Arneson-Hiles');
  const techStack = useTypingEffect('Tech Stack');
  const leadText =
    "I'm Clint, a full-stack web developer specializing in React, JavaScript, Ruby on Rails, and Node.js. Passionate about crafting clean, user-focused applications, I transitioned from heavy equipment operation to tech, driven by curiosity and continuous learning.";

  return (
    <>
      <MatrixAnimation />
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
      <div className='skills-section'>
        <h2 className='section-title'>{useTypingEffect('Tech Stack')}</h2>
        <div className='skills-grid'>
          {/* Frontend Section */}
          <div className='skill-card'>
            <h3>Frontend</h3>
            <div className='tech-icons'>
              <div className='tech-icon-wrapper'>
                <img
                  src='/frontEnd/react.svg'
                  alt='React'
                  className='tech-icon'
                />
                <span className='tooltip-text'>React</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/frontEnd/typescript.svg'
                  alt='TypeScript'
                  className='tech-icon'
                />
                <span className='tooltip-text'>TypeScript</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/frontEnd/javascript.svg'
                  alt='JavaScript'
                  className='tech-icon'
                />
                <span className='tooltip-text'>JavaScript</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/frontEnd/html5.svg'
                  alt='HTML5'
                  className='tech-icon'
                />
                <span className='tooltip-text'>HTML5</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img src='/frontEnd/css.svg' alt='CSS' className='tech-icon' />
                <span className='tooltip-text'>CSS</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/frontEnd/tailwindcss.svg'
                  alt='Tailwind'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Tailwind</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/frontEnd/bootstrap.svg'
                  alt='Bootstrap'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Bootstrap</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/frontEnd/mui.svg'
                  alt='Material UI'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Material UI</span>
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className='skill-card'>
            <h3>Backend</h3>
            <div className='tech-icons'>
              <div className='tech-icon-wrapper'>
                <img
                  src='/backEnd/nodedotjs.svg'
                  alt='Node.js'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Node.js</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/backEnd/express.svg'
                  alt='Express'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Express</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/backEnd/rubyonrails.svg'
                  alt='Ruby on Rails'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Ruby on Rails</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/backEnd/python.svg'
                  alt='Python'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Python</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/backEnd/firebase.svg'
                  alt='Firebase'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Firebase</span>
              </div>
            </div>
          </div>

          {/* Database Section */}
          <div className='skill-card'>
            <h3>Database</h3>
            <div className='tech-icons'>
              <div className='tech-icon-wrapper'>
                <img
                  src='/database/postgresql.svg'
                  alt='PostgreSQL'
                  className='tech-icon'
                />
                <span className='tooltip-text'>postgreSQL</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/database/mysql.svg'
                  alt='MySQL'
                  className='tech-icon'
                />
                <span className='tooltip-text'>MySQL</span>
              </div>

              <div className='tech-icon-wrapper'>
                <img
                  src='/database/mongodb.svg'
                  alt='MongoDB'
                  className='tech-icon'
                />
                <span className='tooltip-text'>MongoDB</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/database/firebase.svg'
                  alt='Firebase'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Firebase</span>
              </div>
            </div>
          </div>

          {/* Additional Tools Section */}
          <div className='skill-card'>
            <h3>Development Tools</h3>
            <div className='tech-icons'>
              <div className='tech-icon-wrapper'>
                <img
                  src='/additional/git.svg'
                  alt='Git'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Git</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/additional/github.svg'
                  alt='GitHub'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Github</span>
              </div>
              <div className='tech-icon-wrapper'>
                <img
                  src='/additional/linux.svg'
                  alt='Linux'
                  className='tech-icon'
                />
                <span className='tooltip-text'>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='cta-section'>
        <h2 className='section-title'>Let's Work Together</h2>
        <p className='lead'>
          Looking for a dedicated developer for your next project?
        </p>
        <NavLink to='/contact' className='cta-button'>
          Get In Touch <i className='bi bi-arrow-right'></i>
        </NavLink>
      </div>
      <div className='social-links'>
        {/* <a
          href='https://github.com/yourusername'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='bi bi-github'></i>
        </a>
        <a
          href='https://linkedin.com/in/yourusername'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='bi bi-linkedin'></i>
        </a> */}
        {/* Add other social links */}
      </div>
      <Footer />
    </>
  );
}
export default Home;
