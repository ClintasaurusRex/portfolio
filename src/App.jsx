import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <div></div>
      </>
    </Router>
  );
}

export default App;
