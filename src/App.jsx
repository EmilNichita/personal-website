import "./App.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import BinaryTrailCursor from "./common/BinaryTrailCursor";

function App() {
  return (
    <>
      <BinaryTrailCursor
        maxDistance="40"
        particleSize="4"
        particleSpeedModifier="0.5"
        particleSpeedOffset="0.1"
        particleCreationTime="4"
      />
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
