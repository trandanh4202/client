import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LogoutIcon from '@mui/icons-material/Logout';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const SidebarProfile = () => {
  return (
    <Paper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          //   alignItems: 'center',
          padding: '5px 15px',
        }}
      >
        <NavLink to="setting" exact className="text-hover flex-not-jtf background-hover profile-sidebar">
          <HomeIcon sx={{ marginRight: '10px' }} />
          <Typography
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              overflow: 'hidden',
            }}
          >
            Thông tin cá nhân
          </Typography>
        </NavLink>
        <NavLink to="address" className="text-hover flex-not-jtf background-hover profile-sidebar">
          <AddLocationAltIcon sx={{ marginRight: '10px' }} />
          <Typography
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              overflow: 'hidden',
            }}
          >
            Địa chỉ mua hàng
          </Typography>
        </NavLink>
        <NavLink to="orderlist" className="text-hover flex-not-jtf background-hover profile-sidebar">
          <WorkHistoryIcon sx={{ marginRight: '10px' }} />
          <Typography
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              overflow: 'hidden',
            }}
          >
            Lịch sử mua hàng
          </Typography>
        </NavLink>
        <NavLink to="" className="text-hover flex-not-jtf background-hover profile-sidebar">
          <LogoutIcon sx={{ marginRight: '10px' }} />
          <Typography
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              overflow: 'hidden',
            }}
          >
            Đăng xuất
          </Typography>
        </NavLink>
      </Box>
    </Paper>
  );
};

export default SidebarProfile;
