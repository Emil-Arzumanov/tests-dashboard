import { SiteModel } from "@libs/models/site.model";

export const getSiteUrlById = (
	sites: SiteModel[],
	id: SiteModel["id"]
): string => {
	const site = sites.find((site) => site.id === id);
	if (!site) return "";

	const domainRegex = /^(https?:\/\/)?(www\.)?([^/]+)/i;
	const match = site.url.match(domainRegex);
	return match ? match[3] : "";
};
