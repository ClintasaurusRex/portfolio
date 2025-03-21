import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects';
import About from './Pages/About';

import NavBar from './Components/NavBar';
import CursorBubble from '../src/CursorBub/CursorBubble';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <Router>
      <CursorBubble />
      <NavBar />
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactForm />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
