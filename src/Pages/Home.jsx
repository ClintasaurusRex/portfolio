import MatrixAnimation from "../Components/MatrixAnimation";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
import useTypingEffect from "../hooks/typingEffect";
import "./home.css";

function Home() {
  const welcomeText = useTypingEffect("Clint Arneson-Hiles");
  const leadText =
    "This is a simple portfolio website created using React. Feel free to explore the website and check out my projects.";

  return (
    <>
      <MatrixAnimation />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="display-1">{welcomeText}</h1>
            <p className="lead">{leadText}</p>
            <nav className="nav-homebtns">
              <NavLink to="/about" className="btn btn-success">
                About Me
              </NavLink>
              <NavLink to="/projects" className="btn btn-success">
                View Projects
              </NavLink>
              <NavLink to="/contact" className="btn btn-success">
                Contact
              </NavLink>
            </nav>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="https://via.placeholder.com/500" alt="placeholder" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
