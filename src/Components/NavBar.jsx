import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul
            className="nav nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm custom-nav-pills"
            id="pillNav2"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link active rounded-5"
                id="home-tab2"
                to="/"
                role="tab"
                aria-selected="true"
              >
                Home
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link rounded-5"
                id="projects-tab2"
                to="/projects"
                role="tab"
                aria-selected="false"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link rounded-5"
                id="about-tab2"
                to="/about"
                role="tab"
                aria-selected="false"
              >
                About
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link rounded-5"
                id="contact-tab2"
                to="/contact"
                role="tab"
                aria-selected="false"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
