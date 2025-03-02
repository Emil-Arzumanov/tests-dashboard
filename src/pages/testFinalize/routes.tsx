import { RouteObject } from "react-router-dom";
import TestFinalize from "./TestFinalize";

/**
 * Defines the route configuration for the Test Finalize page.
 * Includes a dynamic route parameter `id` to load specific test results.
 * @returns An array of RouteObject configurations for the Test Finalize page.
 */
export const testFinalizeRoutes: RouteObject[] = [
	{
		path: ":id",
		element: <TestFinalize />,
	},
];
