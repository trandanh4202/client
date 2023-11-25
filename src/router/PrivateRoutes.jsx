import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  let token = useSelector((state) => state.auth.account.token);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
