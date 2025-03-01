import React from "react";
import { TestsListContext } from "../state/testsListState";

export const useTestsListContext = () => {
	const context = React.useContext(TestsListContext);

	if (!context) {
		throw new Error(
			"useTestsListContext must be used within a TestsListContextProvider"
		);
	}

	return context;
};
