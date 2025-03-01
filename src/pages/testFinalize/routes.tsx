import { RouteObject } from "react-router-dom";
import TestFinalize from "./TestFinalize";

export const testFinalizeRoutes: RouteObject[] = [
	{
		path: ":id",
		element: <TestFinalize />,
	},
];
