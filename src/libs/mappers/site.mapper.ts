import { SiteDto } from "../dtos/site.dto";

import { SiteModel } from "../models/site.model";

export const SiteMapperToDto = (model: SiteModel): SiteDto => {
	return {
		id: model.id,
		url: model.url,
	};
};

export const SiteMapperFromDto = (dto: SiteDto): SiteModel => {
	return {
		id: dto.id,
		url: dto.url,
	};
};
