import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { pagesPaths } from "../pagePathsConfig";

interface IProps {
	requireId?: boolean;
}

const ProtectedIdRoute: React.FC<IProps> = ({ requireId = false }) => {
	const { id } = useParams();

	if (requireId && !id) {
		return <Navigate to={pagesPaths.testsLists} />;
	}

	return <Outlet />;
};

export default ProtectedIdRoute;
