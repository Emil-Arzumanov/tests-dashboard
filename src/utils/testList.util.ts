import { SiteModel } from "@libs/models/site.model";

export const getSiteUrlById = (
	sites: SiteModel[],
	id: SiteModel["id"]
): string => {
	const site = sites.find((site) => site.id === id);
	if (!site) return "";

	return getDomainFromUrl(site.url);
};

export const getDomainFromUrl = (
	siteUrl: SiteModel["url"]
): SiteModel["url"] => {
	if (siteUrl.length === 0) return "";

	const domainRegex = /^(https?:\/\/)?(www\.)?([^/]+)/i;
	const match = siteUrl.match(domainRegex);
	return match ? match[3] : "";
};
