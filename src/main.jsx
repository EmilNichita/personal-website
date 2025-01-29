import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import "./index.css";
import App from "./App.jsx";
import "./assets/font-awesome/css/all.css";

import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();
const root = document.getElementById("root");

// Create a root and render the app
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<App />
			</BaseProvider>
		</StyletronProvider>
	</React.StrictMode>
);
