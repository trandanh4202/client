import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuMobile from '../mobile/MenuMobile/MenuMobile';
import AuthForm from '../auth/Auth';
import { Link } from 'react-router-dom';

const NavigationBottom = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('home'); // Chọn mặc định là trang chủ
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);

  const handleBottomNavChange = (event, newValue) => {
    setSelectedNavItem(newValue);
  };

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  console.log(isAuthOpen);
  const toggleAuthForm = () => {
    setAuthOpen(!isAuthOpen);
  };
  return (
    <>
      <BottomNavigation
        value={selectedNavItem}
        onChange={handleBottomNavChange}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: '10',
          display: { xs: 'block', md: 'none', lg: 'none' },
        }}
      >
        <BottomNavigationAction
          sx={{ maxWidth: '20%', minWidth: '20%', padding: '5px 0' }}
          label="Trang chủ"
          value="home"
          icon={<HomeIcon />}
          component={Link}
          to=""
        />
        <BottomNavigationAction
          sx={{ maxWidth: '20%', minWidth: '20%', padding: '5px 0' }}
          label="Danh mục"
          value="categories"
          icon={<MenuIcon />}
          onClick={toggleMobileDrawer}
        />
        <BottomNavigationAction
          sx={{ maxWidth: '20%', minWidth: '20%', padding: '5px 0' }}
          label="Thông Báo"
          value="notifications"
          icon={<NotificationsNoneIcon />}
          component={Link}
          to="/news"
        />
        <BottomNavigationAction
          sx={{ maxWidth: '20%', minWidth: '20%', padding: '5px 0' }}
          label="Tư vấn "
          value="support"
          icon={<LocalPhoneIcon />}
          component={Link}
          to="/contact"
        />
        <BottomNavigationAction
          sx={{ maxWidth: '20%', minWidth: '20%', padding: '5px 0' }}
          label="Tài khoản"
          value="account"
          icon={<AccountCircleIcon />}
          onClick={toggleAuthForm}
          component={Link}
          to={!isAuthOpen ? '' : '/profile/setting'}
        />
      </BottomNavigation>
      <MenuMobile open={mobileDrawerOpen} onClose={toggleMobileDrawer} />
      <AuthForm open={isAuthOpen} close={toggleAuthForm} />
    </>
  );
};

export default NavigationBottom;
