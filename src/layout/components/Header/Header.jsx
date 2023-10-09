import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  menuItemClasses,
  Paper,
  Popper,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StoreIcon from '@mui/icons-material/Store';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link } from 'react-router-dom';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import BottomNavigation from '~/components/BottomNavigation/BottomNavigation';
import AuthForm from '~/components/auth/Auth';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import HeaderMobile from '~/components/mobile/HeaderMobile/HeaderMobile';
import { MenuButton } from '@mui/base';
const categories = [
  {
    id: 'dienthoai',
    label: 'Điện thoại',
    icon: <MenuIcon />,
    content: [
      {
        title: 'Thương hiệu điện thoại',
        contentLink: ['Iphone', 'Samsung', 'Xiaomi', 'Oppo'],
      },
      {
        title: 'Mức giá điện thoại',
        contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
      },
    ],
  },
  {
    id: 'dienthoai2',
    label: 'Điện thoại2',
    content: [
      {
        title: 'Thương hiệu điện thoại1111',
        contentLink: ['Iphone', 'Samsung', 'Xiaomi', 'Oppo'],
      },
      {
        title: 'Mức giá điện thoại111',
        contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
      },
    ],
  },
  {
    id: 'dienthoai13',
    label: 'Điện thoại13',
    content: [
      {
        title: 'Thương hiệu điện thoại11113',
        contentLink: ['Iphone', 'Samsung', 'Xiaomi', 'Oppo'],
      },
      {
        title: 'Mức giá điện thoại1311',
        contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
      },
      {
        title: 'Mức giá điện thoại1311',
        contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
      },
    ],
  },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [isAuthOpen, setAuthOpen] = useState(false);

  const openAuthForm = () => {
    setAuthOpen(true);
  };
  const closeAuthForm = () => {
    setAuthOpen(false);
  };
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const token = false;

  const [activeModal, setActiveModal] = useState(null);

  const handleMouseEnter = (categoryID) => {
    setActiveModal(categoryID);
  };

  const handleMouseLeave = () => {
    setActiveModal(null);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: 'white', display: { xs: 'none', md: 'block', lg: 'block' } }}
        className={isSticky ? 'header is-sticky' : 'header'}
      >
        <Toolbar>
          <Container>
            <FlexBetween>
              <FlexBetween>
                <Link variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
                  <img alt="LANDP" src="/logo.png" width="100px" />
                </Link>
                <Dropdown>
                  <TriggerButton variant="outlined">
                    <MenuIcon />
                    <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Danh mục</Typography>
                  </TriggerButton>
                  <StyledMenu
                    slots={{ listbox: StyledListbox }}
                    sx={{
                      zIndex: '10',
                    }}
                  >
                    {categories.map((category) => (
                      <StyledMenuItem
                        onMouseEnter={() => handleMouseEnter(category.id)}
                        onMouseLeave={handleMouseLeave} // Khi rời chuột khỏi thẻ Link, ẩn Paper
                      >
                        <Link to="" fullWidth className="Hello">
                          <MenuIcon />
                          {category.label}
                        </Link>
                        {activeModal === category.id && (
                          <Paper className="modal-content" onMouseLeave={handleMouseLeave}>
                            {category.content.map((item) => (
                              <Box
                                key={item.title}
                                sx={{
                                  margin: '10px',
                                }}
                              >
                                <Typography className="title">{item.title}</Typography>
                                {item.contentLink.map((link) => (
                                  <Link to="" className="link_paper">
                                    {link}
                                  </Link>
                                ))}
                              </Box>
                            ))}
                          </Paper>
                        )}
                      </StyledMenuItem>
                    ))}
                  </StyledMenu>
                </Dropdown>
              </FlexBetween>
              <FlexBetween
                overflow="hidden"
                backgroundColor="white"
                borderRadius="50px"
                // padding="5px 10px"
                width="350px"
                border="2px solid rgb(221, 221, 227)"
              >
                <InputBase placeholder="Search..." fullWidth sx={{ paddingRight: '20px', paddingLeft: '10px' }} />
                <Divider orientation="vertical" flexItem />
                <IconButton
                  backgroundColor="grey"
                  sx={{
                    borderRadius: '0%',
                  }}
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
                  <Avatar alt="user" src="./logo.png" sx={{ width: 50, height: 50 }} />
                )}
              </FlexBetween>
            </FlexBetween>
          </Container>
        </Toolbar>
      </AppBar>
      <FlexBetween
        width="100%"
        backgroundColor="grey"
        sx={{ display: { xs: 'none', md: 'block', lg: 'block' }, marginTop: { xs: '0px', md: '117px', lg: '117px' } }}
      >
        <Container>
          <FlexBetween gap="70px">
            <Button sx={{ color: '#333333' }} component={Link} to="">
              <HomeIcon sx={{ fontSize: '45px' }} />
              <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Trang chủ</Typography>
            </Button>
            <Button sx={{ color: '#333333' }} component={Link} to="store">
              <StoreIcon sx={{ fontSize: '45px' }} />
              <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Cửa hàng</Typography>
            </Button>

            <Button sx={{ color: '#333333' }} component={Link} to="contact">
              <SupportAgentIcon sx={{ fontSize: '45px' }} />
              <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Liên lạc</Typography>
            </Button>

            <Button sx={{ color: '#333333' }} component={Link} to="news">
              <NewspaperIcon sx={{ fontSize: '45px' }} />
              <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Tin tức</Typography>
            </Button>
          </FlexBetween>
        </Container>
      </FlexBetween>
      <HeaderMobile />

      <BottomNavigation />
    </>
  );
};

export default Header;
const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};
const StyledMenu = styled(Menu)`
  transform: translate(110px, 150px) !important; // Điều chỉnh khoảng cách theo y tùy ý
  position: fixed !important;
`;
const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  // padding: 6px 0 ;
  margin: 12px 0;
  min-width: 200px;
  border-top-left-radius:12px;
  border-bottom-left-radius:12px;
  padding: 10px 0 10px 10px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  // padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  width:100%;
  padding: 8px 0;
  &:last-of-type {
    border-bottom: none;
  }
  
  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  
  `,
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  display: flex;
  margin: 0 20px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);
