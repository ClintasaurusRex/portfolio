// import { useState, useEffect } from "react";
import "./App.css";
import MatrixAnimation from "./Components/MatrixAnimation";
import Footer from "./Components/Footer";
import ProjectGrid from "./Components/ProjectGrid";
import useShowProjects from "./hooks/useShowProjects";

function App() {
  const showProjects = useShowProjects();
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
