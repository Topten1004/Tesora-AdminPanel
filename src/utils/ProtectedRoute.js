
import React from 'react';

import { Navigate , Outlet } from 'react-router-dom';

import { isAuthenticated } from './helper';

const ProtectedRoute = () => {
    if (!isAuthenticated()) {
      return <Navigate to="/auth/signin" />;
    }
    return <Outlet />;
}
  
export default ProtectedRoute ;