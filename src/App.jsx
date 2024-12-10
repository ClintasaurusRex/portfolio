import "./App.css";
import MatrixAnimation from "./Components/MatrixAnimation";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <header>Welcome to my Portfolio</header>
      <div className="app">
        <MatrixAnimation />
        <Footer />
      </div>
    </>
  );
}

export default App;
