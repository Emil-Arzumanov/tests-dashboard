import { SiteModel } from "@libs/models/site.model";
import { SitesColorsMap } from "@libs/types/modelTypes";

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
