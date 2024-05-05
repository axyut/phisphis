//import React from "react";
import { Navigate } from "react-router-dom";
import { getLoginInfo } from "./LoginInfo";

const ProtectedRoute = (props: any) => {
    if (getLoginInfo() == null) {
        return <Navigate to="/login"></Navigate>;
    }

    return props.children;
};

export default ProtectedRoute;
