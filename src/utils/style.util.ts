import { SiteModel } from "@libs/models/site.model";
import { SitesColorsMap } from "@libs/types/modelTypes";

/**
 * Assigns colors to sites based on their order in the array.
 * @param sites The array of site objects to assign colors to.
 * @param colors The array of colors to use. Colors are assigned in a circular manner if there are more sites than colors.
 * @returns A Map where each site ID is mapped to a color.
 */
export const getSitesColors = (
	sites: SiteModel[],
	colors: string[]
): SitesColorsMap => {
	const sitesColorsMap: SitesColorsMap = new Map();

	sites.forEach((site, index) => {
		const color = colors[index % colors.length];
		sitesColorsMap.set(site.id, color);
	});

	return sitesColorsMap;
};
