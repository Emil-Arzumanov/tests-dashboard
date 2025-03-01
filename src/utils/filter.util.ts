import { TestModel } from "@libs/models/test.model";
import { NullableTestModelArray } from "@libs/types/modelTypes";
import { SortValue } from "@libs/types/sortFilter";

export const searchFilterTestsUtil = (
	tests: TestModel[],
	searchValue: string
): NullableTestModelArray => {
	if (searchValue.length === 0) return tests;

	const filteredTests = tests.filter((test) => test.name.includes(searchValue));
	return filteredTests.length ? filteredTests : null;
};

export const sortFilterTestsUtil = (
	tests: TestModel[],
	sortValue: SortValue
): NullableTestModelArray => {
	const filteredTests = tests;
	return filteredTests;
};

export const debounce = (callback: () => void, timeout: number) => {
	let timer: ReturnType<typeof setTimeout>;

	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => callback(), timeout);
	};
};
