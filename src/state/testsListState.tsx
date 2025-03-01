import React, { useCallback, useReducer } from "react";
import { TestModel } from "../libs/models/test.model";
import { NullableTestModelArray } from "../libs/types/ModelTypes";
import { SiteModel } from "../libs/models/site.model";

import { debounce, filterTests } from "../utils/search.util";

export interface ITestsListContext {
	tests: TestModel[];
	setTests: (payload: TestModel[]) => void;

	sites: SiteModel[];
	setSites: (payload: SiteModel[]) => void;

	filteredTests: NullableTestModelArray;
	setFilteredTests: (payload: NullableTestModelArray) => void;

	searchFilterValue: string;
	setSearchFilterValue: (payload: string) => void;

	filterTests: () => void;
	debouncedFilterTests: () => void;
}

interface IProps {
	children: React.ReactNode;
}

type Action =
	| { type: "SET_TESTS"; payload: TestModel[] }
	| { type: "SET_SITES"; payload: SiteModel[] }
	| { type: "SET_FILTERED_TESTS"; payload: NullableTestModelArray }
	| { type: "SET_SEARCH_FILTER_VALUE"; payload: string }
	| { type: "FILTER_TESTS" };

const initialState: ITestsListContext = {
	tests: [],
	setTests: () => {},

	sites: [],
	setSites: () => {},

	filteredTests: [],
	setFilteredTests: () => {},

	searchFilterValue: "",
	setSearchFilterValue: () => {},

	filterTests: () => {},
	debouncedFilterTests: () => {},
};

const testsListReducer = (
	state: ITestsListContext,
	action: Action
): ITestsListContext => {
	switch (action.type) {
		case "SET_TESTS":
			return { ...state, tests: action.payload };

		case "SET_SITES":
			return { ...state, sites: action.payload };

		case "SET_FILTERED_TESTS":
			return { ...state, filteredTests: action.payload };

		case "SET_SEARCH_FILTER_VALUE":
			return { ...state, searchFilterValue: action.payload };

		case "FILTER_TESTS":
			return {
				...state,
				filteredTests: filterTests(state.tests, state.searchFilterValue),
			};

		default:
			throw new Error(`Unhandled action type`);
	}
};

export const TestsListContext = React.createContext<ITestsListContext | null>(
	null
);

export const TestsListContextProvider = ({ children }: IProps) => {
	const [state, dispatch] = useReducer(testsListReducer, initialState);

	const setTests = (payload: TestModel[]) =>
		dispatch({ type: "SET_TESTS", payload });

	const setSites = (payload: SiteModel[]) =>
		dispatch({ type: "SET_SITES", payload });

	const setFilteredTests = (payload: NullableTestModelArray) =>
		dispatch({ type: "SET_FILTERED_TESTS", payload });

	const setSearchFilterValue = (payload: string) =>
		dispatch({ type: "SET_SEARCH_FILTER_VALUE", payload });

	const filterTests = () => dispatch({ type: "FILTER_TESTS" });

	const debouncedFilterTests = useCallback(
		debounce(() => {
			filterTests();
		}, 500),
		[filterTests]
	);

	return (
		<TestsListContext.Provider
			value={{
				...state,
				setTests,
				setSites,
				setFilteredTests,
				setSearchFilterValue,
				filterTests,
				debouncedFilterTests,
			}}
		>
			{children}
		</TestsListContext.Provider>
	);
};
