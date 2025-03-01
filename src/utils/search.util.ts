import { TestModel } from "../libs/models/test.model";
import { NullableTestModelArray } from "../libs/types/modelTypes";

export const filterTests = (
	tests: TestModel[],
	searchValue: string
): NullableTestModelArray => {
	if (searchValue.length === 0) return tests;

	const filteredTests = tests.filter((test) => test.name.includes(searchValue));
	return filteredTests.length ? filteredTests : null;
};

export const debounce = (callback: () => void, timeout: number) => {
	let timer: ReturnType<typeof setTimeout>;

	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => callback(), timeout);
	};
};
