import React, { useCallback, useReducer } from "react";
import { TestModel } from "@libs/models/test.model";
import { NullableTestModelArray } from "@libs/types/modelTypes";
import { SiteModel } from "@libs/models/site.model";

import {
	debounce,
	searchFilterTestsUtil,
	sortFilterTestsUtil,
} from "@utils/filter.util";
import {
	SortFilterDirection,
	SortFilterField,
	SortValue,
} from "@libs/types/sortFilter";

export interface ITestsListContext {
	tests: TestModel[];
	setTests: (payload: TestModel[]) => void;

	sites: SiteModel[];
	setSites: (payload: SiteModel[]) => void;

	filteredTests: NullableTestModelArray;
	setFilteredTests: (payload: NullableTestModelArray) => void;

	searchFilterValue: string;
	setSearchFilterValue: (payload: string) => void;

	searchFilterTests: () => void;
	debouncedSearchFilter: () => void;

	sortFilterValue: SortValue;
	setSortFilterValue: (payload: SortValue) => void;

	sortFilterTests: () => void;
	debouncedSortFilter: () => void;
}

interface IProps {
	children: React.ReactNode;
}

type Action =
	| { type: "SET_TESTS"; payload: TestModel[] }
	| { type: "SET_SITES"; payload: SiteModel[] }
	| { type: "SET_FILTERED_TESTS"; payload: NullableTestModelArray }
	| { type: "SET_SEARCH_FILTER_VALUE"; payload: string }
	| { type: "SEARCH_FILTER_TESTS" }
	| { type: "SET_SORT_FILTER_VALUE"; payload: SortValue }
	| { type: "SORT_FILTER_TESTS" };

const initialState: ITestsListContext = {
	tests: [],
	setTests: () => {},

	sites: [],
	setSites: () => {},

	filteredTests: [],
	setFilteredTests: () => {},

	searchFilterValue: "",
	setSearchFilterValue: () => {},

	searchFilterTests: () => {},
	debouncedSearchFilter: () => {},

	sortFilterValue: {
		field: SortFilterField.NONE,
		direction: SortFilterDirection.NONE,
	},
	setSortFilterValue: () => {},

	sortFilterTests: () => {},
	debouncedSortFilter: () => {},
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

		case "SEARCH_FILTER_TESTS":
			return {
				...state,
				filteredTests: searchFilterTestsUtil(
					state.tests,
					state.searchFilterValue
				),
			};

		case "SET_SORT_FILTER_VALUE":
			return { ...state, sortFilterValue: action.payload };

		case "SORT_FILTER_TESTS":
			return {
				...state,
				filteredTests: sortFilterTestsUtil(state.tests, state.sortFilterValue),
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

	const searchFilterTests = () => dispatch({ type: "SEARCH_FILTER_TESTS" });

	const debouncedSearchFilter = useCallback(
		debounce(() => {
			searchFilterTests();
		}, 600),
		[searchFilterTests]
	);

	const setSortFilterValue = (payload: SortValue) =>
		dispatch({ type: "SET_SORT_FILTER_VALUE", payload });

	const sortFilterTests = () => dispatch({ type: "SORT_FILTER_TESTS" });

	const debouncedSortFilter = useCallback(
		debounce(() => {
			sortFilterTests();
		}, 600),
		[sortFilterTests]
	);

	return (
		<TestsListContext.Provider
			value={{
				...state,
				setTests,
				setSites,
				setFilteredTests,
				setSearchFilterValue,
				searchFilterTests,
				debouncedSearchFilter,
				setSortFilterValue,
				sortFilterTests,
				debouncedSortFilter,
			}}
		>
			{children}
		</TestsListContext.Provider>
	);
};
