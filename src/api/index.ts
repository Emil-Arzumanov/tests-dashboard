import axios from "axios";

import { apiUrl } from "./apiUrlsConfig";

/**
 * Creates an Axios HTTP client instance with a predefined base URL.
 * The base URL is configured using the `apiUrl` from the API URLs configuration.
 * @returns An Axios instance configured for making HTTP requests to the API.
 */
export const http = axios.create({
	baseURL: apiUrl,
	headers: {},
});
