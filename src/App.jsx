import React, { useState, useEffect } from "react";
import "./App.css";
// import Header from "./sections/Header";
// import Hero from "./sections/Hero";
// import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";
import { themes } from "./theme";
import Main from "./containers/Main";
import BinaryTrailCursor from "./common/BinaryTrailCursor";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <>
      <BinaryTrailCursor
        maxDistance="40"
        particleSize="4"
        particleSpeedModifier="0.5"
        particleSpeedOffset="0.1"
        particleCreationTime="4"
      />
      <Main theme={themes[theme]} setTheme={setTheme} />
    </>
  );
}

export default App;
