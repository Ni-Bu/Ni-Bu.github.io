import logo from "./logo.svg";
import { Parallax } from "react-parallax";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
