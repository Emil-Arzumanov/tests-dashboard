import { RouteObject } from "react-router-dom";
import TestResults from "./TestResults";

/**
 * Defines the route configuration for the Test Results page.
 * Includes a dynamic route parameter `id` to load specific test results.
 * @returns An array of RouteObject configurations for the Test Results page.
 */
export const testResultsRoutes: RouteObject[] = [
	{
		path: ":id",
		element: <TestResults />,
	},
];
