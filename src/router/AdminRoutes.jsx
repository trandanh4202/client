import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {
  let role = useSelector((state) => state.auth.account.token);
  return role === 'Admin' ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
