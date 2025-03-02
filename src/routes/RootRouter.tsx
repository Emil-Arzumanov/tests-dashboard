import { FC } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { pagesPaths } from "./pagePathsConfig";
import ProtectedIdRoute from "./guards/ProtectedIdRoute";

import Dashboard from "@pages/dashboard/Dashboard";
import { dashboardRoutes } from "@pages/dashboard/routes";

import { testFinalizeRoutes } from "@pages/testFinalize/routes";
import { testResultsRoutes } from "@pages/testResults/routes";

/**
 * Defines the root router configuration for the application.
 * Includes routes for the Dashboard, Test Finalize, and Test Results pages.
 * Redirects unknown paths and the root path to the Dashboard.
 * Uses ProtectedIdRoute to guard routes that require an ID.
 * @returns A router configuration with nested routes and redirects.
 */
const routes: RouteObject[] = [
	{
		path: pagesPaths.testsLists,
		element: <Dashboard />,
		children: [...dashboardRoutes],
	},
	{
		path: pagesPaths.testFinalize,
		element: <ProtectedIdRoute requireId />,
		children: [...testFinalizeRoutes],
	},
	{
		path: pagesPaths.testResults,
		element: <ProtectedIdRoute requireId />,
		children: [...testResultsRoutes],
	},
	{
		path: "*",
		element: <Navigate to={pagesPaths.testsLists} />,
	},
	{
		path: "/",
		element: <Navigate to={pagesPaths.testsLists} />,
	},
];

export const RootRouter: FC = () => useRoutes(routes);
