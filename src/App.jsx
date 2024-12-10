import "./App.css";
import MatrixAnimation from "./Components/MatrixAnimation";
import Footer from "./Components/Footer";
// import ProjectModal from "./Modal/ProjectModal";
import ProjectGrid from "./Components/ProjectGrid";

function App() {
  return (
    <>
      <header>Welcome to my Portfolio</header>
      <div>
        <MatrixAnimation />
        <ProjectGrid />
      </div>
      <div className="app">
        <Footer />
      </div>
    </>
  );
}

export default App;
