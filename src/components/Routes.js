import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../utils/ProtectedRoute";

// Pages
import NotFound from '../components/Common/NotFound';

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const Routing = () => {
    return (
        <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
