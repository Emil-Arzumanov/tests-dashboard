import axios from "axios";

import { apiUrl } from "./apiUrlsConfig";

export const http = axios.create({
	baseURL: apiUrl,
	headers: {},
});
