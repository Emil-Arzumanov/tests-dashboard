import { SiteDto } from "../dtos/site.dto";

import { SiteModel } from "../models/site.model";

/**
 * Maps a SiteModel object to a SiteDto object.
 * @param model The SiteModel object to map.
 * @returns A SiteDto object with the same properties as the input model.
 */
export const SiteMapperToDto = (model: SiteModel): SiteDto => {
	return {
		id: model.id,
		url: model.url,
	};
};

/**
 * Maps a SiteDto object to a SiteModel object.
 * @param dto The SiteDto object to map.
 * @returns A SiteModel object with the same properties as the input DTO.
 */
export const SiteMapperFromDto = (dto: SiteDto): SiteModel => {
	return {
		id: dto.id,
		url: dto.url,
	};
};
