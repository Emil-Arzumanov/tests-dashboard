import { RouteObject } from "react-router-dom";
import TestResults from "./TestResults";

export const testResultRoutes: RouteObject[] = [
	{
		path: ":id",
		element: <TestResults />,
	},
];
