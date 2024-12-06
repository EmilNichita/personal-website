import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.jsx";

import { themes } from "./theme";
import Main from "./containers/Main";
import BinaryTrailCursor from "./components/cursor/BinaryTrailCursor.jsx";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <BinaryTrailCursor
          maxDistance="40"
          particleSize="4"
          particleSpeedModifier="0.5"
          particleSpeedOffset="0.1"
          particleCreationTime="4"
        />
        <Main theme={themes[theme]} setTheme={setTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
