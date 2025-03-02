import { SiteModel } from "@libs/models/site.model";

/**
 * Retrieves the domain URL of a site by its ID.
 * @param sites The array of site objects to search through.
 * @param id The ID of the site to find.
 * @returns The domain URL of the site, or an empty string if the site is not found.
 */
export const getSiteUrlById = (
	sites: SiteModel[],
	id: SiteModel["id"]
): string => {
	const site = sites.find((site) => site.id === id);
	if (!site) return "";

	return getDomainFromUrl(site.url);
};

/**
 * Retrieves the domain URL from a site's full URL.
 * @param siteUrl The full URL of the site.
 * @returns The domain part of the URL (e.g., "example.com" from "https://www.example.com").
 */
export const getDomainFromUrl = (
	siteUrl: SiteModel["url"]
): SiteModel["url"] => {
	if (siteUrl.length === 0) return "";

	const domainRegex = /^(https?:\/\/)?(www\.)?([^/]+)/i;
	const match = siteUrl.match(domainRegex);
	return match ? match[3] : "";
};
