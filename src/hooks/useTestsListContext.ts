import React from "react";
import { TestsListContext } from "@state/testsListState";

/**
 * A custom hook to access the TestsListContext.
 * Ensures that the context is used within a TestsListContextProvider.
 * @throws An error if the context is not available.
 * @returns The TestsListContext value.
 */
export const useTestsListContext = () => {
	const context = React.useContext(TestsListContext);

	if (!context) {
		throw new Error(
			"useTestsListContext must be used within a TestsListContextProvider"
		);
	}

	return context;
};
