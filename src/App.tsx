import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./routes/RootRouter";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<RootRouter />
		</BrowserRouter>
	);
};

export default App;
