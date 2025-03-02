import { http } from "..";
import { tests } from "../apiUrlsConfig";

import { TestDto } from "@libs/dtos/test.dto";
import { TestMapperFromDto } from "@libs/mappers/test.mapper";
import { TestModel } from "@libs/models/test.model";

/**
 * Fetches all tests from the API and maps them from TestDto to the TestModel format.
 * @returns A promise that resolves to an array of TestModel objects.
 * @throws An error if the request fails.
 */
export const getAllTests = async (): Promise<TestModel[]> => {
	try {
		const { data } = await http.get<TestDto[]>(tests.getAllTests);
		return data.map((test) => TestMapperFromDto(test));
	} catch (error: unknown) {
		return Promise.reject(error);
	}
};

/**
 * Fetches a specific site by its ID from the API and maps it from TestDto to the TestModel format.
 * @param id The ID of the test to fetch.
 * @returns A promise that resolves to a TestModel object.
 * @throws An error if the request fails.
 */
export const getTestById = async (id: TestModel["id"]): Promise<TestModel> => {
	try {
		const { data } = await http.get<TestDto>(tests.getTestById(id));
		return TestMapperFromDto(data);
	} catch (error: unknown) {
		return Promise.reject(error);
	}
};
