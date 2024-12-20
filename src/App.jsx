import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import NavBar from "./Components/NavBar";
import CursorBubble from "./Components/CursorBubble";

function App() {
  return (
    <Router>
      <CursorBubble />
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
