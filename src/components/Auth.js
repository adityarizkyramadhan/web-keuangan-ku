import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isTokenAvailable } from "../utils/helper.js";

const authRoute = () => {
    const isAuthenticated = isTokenAvailable();
    if (isAuthenticated) {
        return <Navigate to="/proker" />;
    }
    return <Outlet />;
}

export default authRoute;
