import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, isAuthenticated, ...props }) => {
  isAuthenticated = useSelector(state => state.isAuthenticated);
  return isAuthenticated ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default PrivateRoute;
