import { FC } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { pagesPaths } from "./pagePathsConfig";
import ProtectedIdRoute from "./guards/ProtectedIdRoute";

import Dashboard from "@pages/dashboard/Dashboard";
import { dashboardRoutes } from "@pages/dashboard/routes";

import { testFinalizeRoutes } from "@pages/testFinalize/routes";
import { testResultRoutes } from "@pages/testResults/routes";

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
		children: [...testResultRoutes],
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
