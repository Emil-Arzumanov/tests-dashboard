import { http } from "..";
import { sites } from "../apiUrlsConfig";

import { SiteDto } from "@libs/dtos/site.dto";
import { SiteMapperFromDto } from "@libs/mappers/site.mapper";
import { SiteModel } from "@libs/models/site.model";
import { TestModel } from "@libs/models/test.model";

/**
 * Fetches all sites from the API and maps them from SiteDto to the SiteModel format.
 * @returns A promise that resolves to an array of SiteModel objects.
 * @throws An error if the request fails.
 */
export const getAllSites = async (): Promise<SiteModel[]> => {
	try {
		const { data } = await http.get<SiteDto[]>(sites.getAllSites);
		return data.map((test) => SiteMapperFromDto(test));
	} catch (error: unknown) {
		return Promise.reject(error);
	}
};

/**
 * Fetches a specific site by its ID from the API and maps it from SiteDto to the SiteModel format.
 * @param id The ID of the site to fetch.
 * @returns A promise that resolves to a SiteModel object.
 * @throws An error if the request fails.
 */
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
