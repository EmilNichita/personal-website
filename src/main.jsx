import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import "./assets/font-awesome/css/all.css";

import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";


const engine = new Styletron();

ReactDOM.render(
	<StyletronProvider value={engine}>
		<BaseProvider theme={LightTheme}>
				<App />
	</BaseProvider>
	</StyletronProvider>,
	document.getElementById("root")
);