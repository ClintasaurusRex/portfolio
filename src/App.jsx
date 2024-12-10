import { useState, useEffect } from "react";
import "./App.css";
import MatrixAnimation from "./Components/MatrixAnimation";
import Footer from "./Components/Footer";
import ProjectGrid from "./Components/ProjectGrid";

function App() {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header>Welcome to my Portfolio</header>
      <div className="app">
        <MatrixAnimation />
        {showProjects && <ProjectGrid />}
        <Footer />
      </div>
    </>
  );
}

export default App;
