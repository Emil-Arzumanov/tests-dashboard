import { http } from "..";
import { sites } from "../apiUrlsConfig";

import { SiteDto } from "@libs/dtos/site.dto";
import { SiteMapperFromDto } from "@libs/mappers/site.mapper";
import { SiteModel } from "@libs/models/site.model";
import { TestModel } from "@libs/models/test.model";

export const getAllSites = async (): Promise<SiteModel[]> => {
	try {
		const { data } = await http.get<SiteDto[]>(sites.getAllSites);
		return data.map((test) => SiteMapperFromDto(test));
	} catch (error: unknown) {
		return Promise.reject(error);
	}
};

export const getSiteById = async (
	id: TestModel["siteId"]
): Promise<SiteModel> => {
	try {
		const { data } = await http.get<SiteDto>(sites.getSiteById(id));
		return SiteMapperFromDto(data);
	} catch (error: unknown) {
		return Promise.reject(error);
	}
};
