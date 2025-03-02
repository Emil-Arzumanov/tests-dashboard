import { SiteModel } from "@libs/models/site.model";
import { TestModel, TestStatusModel } from "@libs/models/test.model";
import { NullableTestModelArray } from "@libs/types/modelTypes";
import {
	SortFilterDirection,
	SortFilterField,
	SortValue,
} from "@libs/types/sortFilter";
import { getDomainFromUrl } from "./testList.util";

/**
 * Determines the new sort value based on the current field and direction.
 * @param newField The new field to sort by.
 * @param oldField The current field being sorted by.
 * @param direction The current sort direction.
 * @returns A new SortValue object with the updated field and direction.
 */
export const getNewSortValue = (
	newField: SortFilterField,
	oldField: SortFilterField,
	direction: SortFilterDirection
): SortValue => {
	if (newField !== oldField) {
		return {
			field: newField,
			direction: SortFilterDirection.ASC,
		};
	}

	if (direction === SortFilterDirection.NONE) {
		return {
			field: newField,
			direction: SortFilterDirection.ASC,
		};
	} else if (direction === SortFilterDirection.ASC) {
		return {
			field: newField,
			direction: SortFilterDirection.DESC,
		};
	} else if (direction === SortFilterDirection.DESC) {
		return {
			field: SortFilterField.NONE,
			direction: SortFilterDirection.NONE,
		};
	} else {
		return {
			field: newField,
			direction,
		};
	}
};

/**
 * Filters and sorts tests based on search value and sort criteria.
 * @param tests The array of tests to filter and sort.
 * @param searchValue The search string to filter tests by name.
 * @param sites The array of sites to resolve site URLs for sorting.
 * @param sortValue The current sort criteria (field and direction).
 * @returns A filtered and sorted array of tests, or null if no tests match the search.
 */
export const filterTestsUtil = (
	tests: TestModel[],
	searchValue: string,
	sites: SiteModel[],
	sortValue: SortValue
): NullableTestModelArray => {
	if (
		searchValue.length === 0 &&
		sortValue.field === SortFilterField.NONE &&
		sortValue.direction === SortFilterDirection.NONE
	) {
		return tests;
	}

	return sortFilterTestsUtil(
		searchFilterTestsUtil(tests, searchValue),
		sites,
		sortValue
	);
};

/**
 * Filters tests by name based on the search value.
 * @param tests The array of tests to filter.
 * @param searchValue The search string to filter tests by name.
 * @returns A filtered array of tests, or null if no tests match the search.
 */
export const searchFilterTestsUtil = (
	tests: TestModel[],
	searchValue: string
): NullableTestModelArray => {
	if (searchValue.length === 0) {
		return tests;
	}

	const filteredTests = tests.filter((test) => test.name.includes(searchValue));
	return filteredTests.length ? filteredTests : null;
};

/**
 * Sorts tests based on the specified field and direction.
 * @param filteredTests The array of tests, filtered by search, to sort.
 * @param sites The array of sites to resolve site URLs for sorting.
 * @param sortValue The current sort criteria (field and direction).
 * @returns A sorted array of tests, or null if the input array is null.
 */
export const sortFilterTestsUtil = (
	filteredTests: NullableTestModelArray,
	sites: SiteModel[],
	sortValue: SortValue
): NullableTestModelArray => {
	if (filteredTests === null) return null;

	if (
		sortValue.field === SortFilterField.NONE ||
		sortValue.direction === SortFilterDirection.NONE
	) {
		return filteredTests;
	}

	const sortedTests = [...filteredTests];

	const compare = (a: TestModel, b: TestModel): number => {
		let valueA: string | number = "";
		let valueB: string | number = "";

		switch (sortValue.field) {
			case SortFilterField.NAME: {
				valueA = a.name;
				valueB = b.name;
				break;
			}

			case SortFilterField.TYPE: {
				valueA = a.type.toString();
				valueB = b.type.toString();
				break;
			}

			case SortFilterField.STATUS: {
				const statusPriority = {
					[TestStatusModel.ONLINE]: 1,
					[TestStatusModel.PAUSED]: 2,
					[TestStatusModel.STOPPED]: 3,
					[TestStatusModel.DRAFT]: 4,
				};
				valueA = statusPriority[a.status] || 0;
				valueB = statusPriority[b.status] || 0;
				break;
			}

			case SortFilterField.SITE: {
				const siteAUrl = sites.find((site) => site.id === a.siteId)?.url ?? "";
				const siteBUrl = sites.find((site) => site.id === b.siteId)?.url ?? "";
				valueA = getDomainFromUrl(siteAUrl);
				valueB = getDomainFromUrl(siteBUrl);
				break;
			}

			default:
				return 0;
		}

		if (valueA < valueB) {
			return sortValue.direction === SortFilterDirection.ASC ? -1 : 1;
		}
		if (valueA > valueB) {
			return sortValue.direction === SortFilterDirection.ASC ? 1 : -1;
		}
		return 0;
	};

	return sortedTests.sort(compare);
};

/**
 * Creates a debounced version of a function that delays its execution.
 * @param callback The function to debounce.
 * @param timeout The delay in milliseconds before the function is executed.
 * @returns A debounced function.
 */
export const debounce = (callback: () => void, timeout: number) => {
	let timer: ReturnType<typeof setTimeout>;

	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => callback(), timeout);
	};
};
