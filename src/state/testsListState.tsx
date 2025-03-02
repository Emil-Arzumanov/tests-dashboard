import React, { useCallback, useReducer } from "react";
import { TestModel } from "@libs/models/test.model";
import { NullableTestModelArray, SitesColorsMap } from "@libs/types/modelTypes";
import { SiteModel } from "@libs/models/site.model";

import { debounce, filterTestsUtil, getNewSortValue } from "@utils/filter.util";
import {
	SortFilterDirection,
	SortFilterField,
	SortValue,
} from "@libs/types/sortFilter";
import { getSitesColors } from "@utils/style.util";

export interface ITestsListContext {
	tests: TestModel[];
	setTests: (payload: TestModel[]) => void;

	sites: SiteModel[];
	setSites: (payload: SiteModel[]) => void;
	sitesColors: SitesColorsMap;
	setSitesColors: (payload: string[]) => void;

	filteredTests: NullableTestModelArray;
	setFilteredTests: (payload: NullableTestModelArray) => void;

	searchFilterValue: string;
	setSearchFilterValue: (payload: string) => void;

	sortFilterValue: SortValue;
	setSortFilterValue: (payload: SortFilterField) => void;
	setSortDirectionValue: (payload: SortFilterDirection) => void;

	filterTests: () => void;
	debouncedFilter: () => void;
}

interface IProps {
	children: React.ReactNode;
}

type Action =
	| { type: "SET_TESTS"; payload: TestModel[] }
	| { type: "SET_SITES"; payload: SiteModel[] }
	| { type: "SET_SITES_COLORS"; payload: string[] }
	| { type: "SET_FILTERED_TESTS"; payload: NullableTestModelArray }
	| { type: "SET_SEARCH_FILTER_VALUE"; payload: string }
	| { type: "SET_SORT_FILTER_VALUE"; payload: SortFilterField }
	| { type: "SET_SORT_DIRECTION_VALUE"; payload: SortFilterDirection }
	| { type: "FILTER_TESTS" };

const initialState: ITestsListContext = {
	tests: [],
	setTests: () => {},

	sites: [],
	setSites: () => {},
	sitesColors: new Map(),
	setSitesColors: () => {},

	filteredTests: [],
	setFilteredTests: () => {},

	searchFilterValue: "",
	setSearchFilterValue: () => {},

	sortFilterValue: {
		field: SortFilterField.NONE,
		direction: SortFilterDirection.NONE,
	},
	setSortFilterValue: () => {},
	setSortDirectionValue: () => {},

	filterTests: () => {},
	debouncedFilter: () => {},
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
		case "SET_SITES_COLORS":
			return {
				...state,
				sitesColors: getSitesColors(state.sites, action.payload),
			};

		case "SET_FILTERED_TESTS":
			return { ...state, filteredTests: action.payload };

		case "SET_SEARCH_FILTER_VALUE":
			return { ...state, searchFilterValue: action.payload };

		case "SET_SORT_FILTER_VALUE":
			return {
				...state,
				sortFilterValue: getNewSortValue(
					action.payload,
					state.sortFilterValue.field,
					state.sortFilterValue.direction
				),
			};
		case "SET_SORT_DIRECTION_VALUE":
			return {
				...state,
				sortFilterValue: {
					...state.sortFilterValue,
					direction: action.payload,
				},
			};

		case "FILTER_TESTS":
			return {
				...state,
				filteredTests: filterTestsUtil(
					state.tests,
					state.searchFilterValue,
					state.sites,
					state.sortFilterValue
				),
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
	const setSitesColors = (payload: string[]) =>
		dispatch({ type: "SET_SITES_COLORS", payload });

	const setFilteredTests = (payload: NullableTestModelArray) =>
		dispatch({ type: "SET_FILTERED_TESTS", payload });

	const setSearchFilterValue = (payload: string) =>
		dispatch({ type: "SET_SEARCH_FILTER_VALUE", payload });

	const setSortFilterValue = (payload: SortFilterField) =>
		dispatch({ type: "SET_SORT_FILTER_VALUE", payload });
	const setSortDirectionValue = (payload: SortFilterDirection) =>
		dispatch({ type: "SET_SORT_DIRECTION_VALUE", payload });

	const filterTests = () => dispatch({ type: "FILTER_TESTS" });
	const debouncedFilter = useCallback(
		debounce(() => {
			filterTests();
		}, 600),
		[filterTests]
	);

	return (
		<TestsListContext.Provider
			value={{
				...state,
				setTests,
				setSites,
				setSitesColors,
				setFilteredTests,
				setSearchFilterValue,
				setSortFilterValue,
				setSortDirectionValue,
				filterTests,
				debouncedFilter,
			}}
		>
			{children}
		</TestsListContext.Provider>
	);
};
