import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import BinaryTrailCursor from "./common/BinaryTrailCursor";

function App() {
  return (
    <>
      <BinaryTrailCursor />
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
