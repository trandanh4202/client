import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import AuthForm from '~/components/auth/Auth';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '~/features/menu/menuSlice';
import { AddLocationAlt, Home, LogoutOutlined, WorkHistory } from '@mui/icons-material';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';

const HeaderUpper = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const openAuthForm = () => {
    setAuthOpen(true);
  };
  const closeAuthForm = () => {
    setAuthOpen(false);
  };
  const token = useSelector((state) => state.auth.account.token);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Khoảng cách tùy chỉnh để header trở thành sticky

        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (token) {
      setAuthOpen(false);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [token]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    navigate(`/store?q=${searchValue}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AppBar
      sx={{ backgroundColor: 'white', display: { xs: 'none', md: 'block', lg: 'block' } }}
      className={isSticky ? 'header is-sticky' : 'header'}
    >
      <Toolbar>
        <Container>
          <FlexBetween>
            <FlexBetween>
              <Link variant="h6" to="/" sx={{ flexGrow: 1 }}>
                <img alt="LANDP" src="/logo.png" width="100px" />
              </Link>
              <HeaderMenu />
            </FlexBetween>
            <FlexBetween
              overflow="hidden"
              backgroundColor="white"
              borderRadius="50px"
              width="350px"
              border="2px solid rgb(221, 221, 227)"
            >
              <InputBase
                id="searchInput"
                placeholder="Search..."
                fullWidth
                sx={{ paddingRight: '20px', paddingLeft: '10px' }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Divider orientation="vertical" flexItem />
              <IconButton
                backgroundColor="grey"
                sx={{
                  borderRadius: '0%',
                }}
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </FlexBetween>
            <FlexBetween gap="15px">
              <Link to="contact">
                <IconButton
                  sx={{
                    borderRadius: '10px',
                  }}
                  className="text-hover"
                >
                  <LocationOnIcon sx={{ fontSize: '40px' }} />
                  <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
                    Chi <br /> nhánh
                  </Typography>
                </IconButton>
              </Link>

              <Link className="text-hover">
                <IconButton
                  sx={{
                    borderRadius: '10px',
                  }}
                  className="text-hover"
                >
                  <NotificationsNoneIcon sx={{ fontSize: '40px' }} />
                  <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
                    Thông <br />
                    báo
                  </Typography>
                </IconButton>
              </Link>

              <Link to="cart">
                <IconButton
                  sx={{
                    borderRadius: '10px',
                  }}
                  className="text-hover"
                >
                  <ShoppingCartIcon sx={{ fontSize: '40px' }} />
                  <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
                    Giỏ <br /> hàng
                  </Typography>
                </IconButton>
              </Link>

              {!token ? (
                <Box>
                  <IconButton
                    sx={{
                      borderRadius: '10px',
                    }}
                    onClick={openAuthForm}
                    className="text-hover"
                  >
                    <AccountCircleIcon sx={{ fontSize: '40px' }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
                      Đăng <br /> nhập
                    </Typography>
                  </IconButton>
                  <AuthForm open={isAuthOpen} close={closeAuthForm} />
                </Box>
              ) : (
                <>
                  <Tippy
                    content={
                      <Paper
                        elevation={3}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          padding: '10px',
                          gap: '10px',
                        }}
                      >
                        <Link to="/profile/settings" className="text-hover">
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Home sx={{ marginRight: '10px' }} />
                            <Typography>Thông tin tài khoản</Typography>
                          </Box>
                        </Link>
                        <Link to="/profile/orderlist" className="text-hover">
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <WorkHistory sx={{ marginRight: '10px' }} />

                            <Typography>Lịch sử đơn hàng</Typography>
                          </Box>
                        </Link>
                        <Link to="/profile/address" className="text-hover">
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <AddLocationAlt sx={{ marginRight: '10px' }} />
                            <Typography> Danh sách địa chỉ</Typography>
                          </Box>
                        </Link>
                        <Link
                          to=""
                          className="text-hover"
                          variant="contained"
                          disableElevation
                          sx={{
                            backgroundColor: '#1435c3',
                          }}
                          onClick={handleLogout}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <LogoutOutlined sx={{ marginRight: '10px' }} />
                            <Typography> Đăng xuất</Typography>
                          </Box>
                        </Link>
                      </Paper>
                    }
                    delay={[0, 700]}
                    interactive
                    placement="bottom-end"
                    trigger=" mouseenter click focusin" // Sử dụng 'manual' để kiểm soát hiển thị tooltip thủ công
                  >
                    <Avatar alt="user" src="./logo.png" sx={{ width: 50, height: 50 }} />
                  </Tippy>
                </>
              )}
            </FlexBetween>
          </FlexBetween>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderUpper;
