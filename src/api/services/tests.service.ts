import { http } from "..";
import { tests } from "../apiUrlsConfig";

import { TestDto } from "@libs/dtos/test.dto";
import { TestMapperFromDto } from "@libs/mappers/test.mapper";
import { TestModel } from "@libs/models/test.model";

export const getAllTests = async (): Promise<TestModel[]> => {
	try {
		const { data } = await http.get<TestDto[]>(tests.getAllTests);
		return data.map((test) => TestMapperFromDto(test));
	} catch (error: unknown) {
		return Promise.reject(error);
	}
};

export const getTestById = async (id: TestModel["id"]): Promise<TestModel> => {
	try {
		const { data } = await http.get<TestDto>(tests.getTestById(id));
		return TestMapperFromDto(data);
	} catch (error: unknown) {
		return Promise.reject(error);
	}
};
