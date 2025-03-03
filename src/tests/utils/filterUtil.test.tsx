import { SiteModel } from "@libs/models/site.model";
import {
	TestModel,
	TestStatusModel,
	TestTypeModel,
} from "@libs/models/test.model";
import { SortFilterField, SortFilterDirection } from "@libs/types/sortFilter";
import {
	debounce,
	filterTestsUtil,
	getNewSortValue,
	searchFilterTestsUtil,
	sortFilterTestsUtil,
} from "@utils/filter.util";

describe("getNewSortValue", () => {
	it("should return ASC direction when newField is different from oldField", () => {
		const result = getNewSortValue(
			SortFilterField.NAME,
			SortFilterField.TYPE,
			SortFilterDirection.ASC
		);
		expect(result).toEqual({
			field: SortFilterField.NAME,
			direction: SortFilterDirection.ASC,
		});
	});

	it("should return ASC direction when current direction is NONE", () => {
		const result = getNewSortValue(
			SortFilterField.NAME,
			SortFilterField.NAME,
			SortFilterDirection.NONE
		);
		expect(result).toEqual({
			field: SortFilterField.NAME,
			direction: SortFilterDirection.ASC,
		});
	});

	it("should return DESC direction when current direction is ASC", () => {
		const result = getNewSortValue(
			SortFilterField.NAME,
			SortFilterField.NAME,
			SortFilterDirection.ASC
		);
		expect(result).toEqual({
			field: SortFilterField.NAME,
			direction: SortFilterDirection.DESC,
		});
	});

	it("should return NONE direction when current direction is DESC", () => {
		const result = getNewSortValue(
			SortFilterField.NAME,
			SortFilterField.NAME,
			SortFilterDirection.DESC
		);
		expect(result).toEqual({
			field: SortFilterField.NONE,
			direction: SortFilterDirection.NONE,
		});
	});
});

describe("filterTestsUtil", () => {
	const mockTests: TestModel[] = [
		{
			id: 1,
			name: "Test A",
			type: TestTypeModel.CLASSIC,
			status: TestStatusModel.ONLINE,
			siteId: 1,
		},
		{
			id: 2,
			name: "Test B",
			type: TestTypeModel.MVT,
			status: TestStatusModel.PAUSED,
			siteId: 2,
		},
	];

	const mockSites: SiteModel[] = [
		{ id: 1, url: "https://site1.com" },
		{ id: 2, url: "https://site2.com" },
	];

	it("should return original tests if no search or sort is applied", () => {
		const result = filterTestsUtil(mockTests, "", mockSites, {
			field: SortFilterField.NONE,
			direction: SortFilterDirection.NONE,
		});
		expect(result).toEqual(mockTests);
	});

	it("should filter tests by search value", () => {
		const result = filterTestsUtil(mockTests, "Test A", mockSites, {
			field: SortFilterField.NONE,
			direction: SortFilterDirection.NONE,
		});
		expect(result).toEqual([mockTests[0]]);
	});

	it("should return null if no tests match the search", () => {
		const result = filterTestsUtil(mockTests, "Non-existent", mockSites, {
			field: SortFilterField.NONE,
			direction: SortFilterDirection.NONE,
		});
		expect(result).toBeNull();
	});
});

describe("searchFilterTestsUtil", () => {
	const mockTests: TestModel[] = [
		{
			id: 1,
			name: "Test A",
			type: TestTypeModel.SERVER_SIDE,
			status: TestStatusModel.ONLINE,
			siteId: 1,
		},
		{
			id: 2,
			name: "Test B",
			type: TestTypeModel.MVT,
			status: TestStatusModel.PAUSED,
			siteId: 2,
		},
	];

	it("should return original tests if search value is empty", () => {
		const result = searchFilterTestsUtil(mockTests, "");
		expect(result).toEqual(mockTests);
	});

	it("should filter tests by search value", () => {
		const result = searchFilterTestsUtil(mockTests, "Test A");
		expect(result).toEqual([mockTests[0]]);
	});

	it("should return null if no tests match the search", () => {
		const result = searchFilterTestsUtil(mockTests, "Non-existent");
		expect(result).toBeNull();
	});
});

describe("sortFilterTestsUtil", () => {
	const mockTests: TestModel[] = [
		{
			id: 1,
			name: "Test B",
			type: TestTypeModel.CLASSIC,
			status: TestStatusModel.PAUSED,
			siteId: 2,
		},
		{
			id: 2,
			name: "Test A",
			type: TestTypeModel.SERVER_SIDE,
			status: TestStatusModel.ONLINE,
			siteId: 1,
		},
	];

	const mockSites: SiteModel[] = [
		{ id: 1, url: "https://site1.com" },
		{ id: 2, url: "https://site2.com" },
	];

	it("should return null if filteredTests is null", () => {
		const result = sortFilterTestsUtil(null, mockSites, {
			field: SortFilterField.NAME,
			direction: SortFilterDirection.ASC,
		});
		expect(result).toBeNull();
	});

	it("should return original tests if no sort is applied", () => {
		const result = sortFilterTestsUtil(mockTests, mockSites, {
			field: SortFilterField.NONE,
			direction: SortFilterDirection.NONE,
		});
		expect(result).toEqual(mockTests);
	});

	it("should sort tests by name in ascending order", () => {
		const result = sortFilterTestsUtil(mockTests, mockSites, {
			field: SortFilterField.NAME,
			direction: SortFilterDirection.ASC,
		});
		expect(result).toEqual([mockTests[1], mockTests[0]]);
	});

	it("should sort tests by name in descending order", () => {
		const result = sortFilterTestsUtil(mockTests, mockSites, {
			field: SortFilterField.NAME,
			direction: SortFilterDirection.DESC,
		});
		expect(result).toEqual([mockTests[0], mockTests[1]]);
	});

	it("should sort tests by status using priority", () => {
		const result = sortFilterTestsUtil(mockTests, mockSites, {
			field: SortFilterField.STATUS,
			direction: SortFilterDirection.ASC,
		});
		expect(result).toEqual([mockTests[1], mockTests[0]]);
	});
});

describe("debounce", () => {
	it("should call the debounced function after the timeout", async () => {
		const callback = vi.fn();
		const debouncedFunction = debounce(callback, 100);

		debouncedFunction();
		expect(callback).not.toHaveBeenCalled();

		await new Promise((resolve) => setTimeout(resolve, 150));
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it("should cancel the previous call if debounced function is called again", async () => {
		const callback = vi.fn();
		const debouncedFunction = debounce(callback, 100);

		debouncedFunction();
		debouncedFunction();

		await new Promise((resolve) => setTimeout(resolve, 150));
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
