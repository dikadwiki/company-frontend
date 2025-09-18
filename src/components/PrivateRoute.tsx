import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRole: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  if (!token || userRole !== requiredRole) {
    // Redirect to login page if not authenticated or not authorized
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;