export const apiUrl = "http://localhost:3100";

export const tests = {
	getAllTests: `/tests`,
	getTestById: (id: number) => `/tests/${id}`,
};

export const sites = {
	getAllSites: `/sites`,
	getSiteById: (id: number) => `/sites/${id}`,
};
