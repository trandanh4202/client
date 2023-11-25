import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Header from '~/layout/components/Header/Header';
import HeaderAdmin from '~/components/headerAdmin/HeaderAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '~/features/category/categoriesSlice';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CampaignIcon from '@mui/icons-material/Campaign';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
const Dashboard = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.account.token);
  const role = useSelector((state) => state.auth?.account?.role);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    if (!(role && role[0] === 'Admin')) {
      navigate('/Admin/login');
    }
  }, [role]);
  const handleLogout = () => {
    navigate('/Admin/login');
    localStorage.clear();
  };
  return (
    <>
      <HeaderAdmin />
      <Box>
        <Grid container>
          <Grid item lg={2} sx={{ padding: '0 20px' }}>
            <Paper sx={{ padding: '20px' }}>
              <Box component={Link} to="" sx={{ display: 'flex', alignItems: 'center ' }}>
                <HomeIcon sx={{ marginRight: '10px' }} />
                <Typography>Trang chủ</Typography>
              </Box>
              <Divider sx={{ margin: '15px 0' }} />
              <Box component={Link} to="manageuser" sx={{ display: 'flex', alignItems: 'center ' }}>
                <ManageAccountsIcon sx={{ marginRight: '10px' }} />
                <Typography>Quản lý người dùng</Typography>
              </Box>
              <Divider sx={{ margin: '15px 0' }} />
              <Box component={Link} to="product" sx={{ display: 'flex', alignItems: 'center ' }}>
                <PrecisionManufacturingIcon sx={{ marginRight: '10px' }} />
                <Typography>Quản lý sản phẩm</Typography>
              </Box>
              <Divider sx={{ margin: '15px 0' }} />
              <Box component={Link} to="category" sx={{ display: 'flex', alignItems: 'center ' }}>
                <CategoryIcon sx={{ marginRight: '10px' }} />
                <Typography>Phân loại sản phẩm</Typography>
              </Box>
              <Divider sx={{ margin: '15px 0' }} />
              <Box component={Link} to="brand" sx={{ display: 'flex', alignItems: 'center ' }}>
                <SettingsIcon sx={{ marginRight: '10px' }} />
                <Typography>Thương hiệu sản phẩm</Typography>
              </Box>{' '}
              <Divider sx={{ margin: '15px 0' }} />
              <Box onClick={handleLogout} sx={{ display: 'flex', alignItems: 'center ' }}>
                <LogoutIcon sx={{ marginRight: '10px' }} />
                <Typography>Đăng xuất</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
