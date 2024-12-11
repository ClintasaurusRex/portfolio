import MatrixAnimation from "../Components/MatrixAnimation";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
// import ProjectGrid from "./Components/ProjectGrid";
// import useShowProjects from "./hooks/useShowProjects";

function Home() {
  // const showProjects = useShowProjects();
  return (
    <>
      {/* <header>Welcome to my Portfolio</header> */}
      <NavBar />
      <div className="app">
        <MatrixAnimation />
        {/* {showProjects && <ProjectGrid />} */}
        <Footer />
      </div>
    </>
  );
}
export default Home;
