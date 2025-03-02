/**
 * Defines the base API URL and endpoint configurations for tests and sites.
 * @property apiUrl The base URL for the API.
 * @property tests Endpoints related to tests, including fetching all tests or a specific test by ID.
 * @property sites Endpoints related to sites, including fetching all sites or a specific site by ID.
 */

export const apiUrl = "http://localhost:3100";

export const tests = {
	getAllTests: `/tests`,
	getTestById: (id: number) => `/tests/${id}`,
};

export const sites = {
	getAllSites: `/sites`,
	getSiteById: (id: number) => `/sites/${id}`,
};
