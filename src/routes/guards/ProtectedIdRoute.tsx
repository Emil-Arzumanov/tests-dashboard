import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { pagesPaths } from "../pagePathsConfig";

interface IProps {
	requireId?: boolean;
}

/**
 * A route guard that ensures an ID is present in the URL parameters if required.
 * Redirects to the tests list page if the ID is missing and `requireId` is true.
 * @param requireId If true, the route requires an ID in the URL parameters.
 * @returns An Outlet to render child routes if the ID condition is satisfied, or a redirect otherwise.
 */
const ProtectedIdRoute: React.FC<IProps> = ({ requireId = false }) => {
	const { id } = useParams();

	if (requireId && !id) {
		return <Navigate to={pagesPaths.testsLists} />;
	}

	return <Outlet />;
};

export default ProtectedIdRoute;
