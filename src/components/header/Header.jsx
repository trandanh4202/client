import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  Icon,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  menuItemClasses,
  Paper,
  Popper,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlexBetween from '../flexbetween/FlexBetween';
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
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
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
const menu = [
  {
    icon: <MenuIcon />,
    title: 'Laptop',
    children1: [
      {
        titleChildren: 'Thương hiệu',
        children2: [
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
        ],
      },
    ],
  },
  {
    icon: <MenuIcon />,
    title: 'Laptop',
    children1: [
      {
        titleChildren: 'Thương hiệu',
        children2: [
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(true);

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

  const [selectedNavItem, setSelectedNavItem] = useState('home'); // Chọn mặc định là trang chủ

  const handleBottomNavChange = (event, newValue) => {
    setSelectedNavItem(newValue);
  };
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openItems, setOpenItems] = useState({}); // Trạng thái mở/rút gọn cho từng ListItem và cấp con

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMainClick = (itemIndex) => {
    // Đóng tất cả các Collapse khác
    const updatedOpenItems = {};
    updatedOpenItems[itemIndex] = !openItems[itemIndex];
    setOpenItems(updatedOpenItems);
  };

  const handleChildClick = (itemIndex, childIndex) => {
    // Đóng tất cả các Collapse khác và mở Collapse mới
    const updatedOpenItems = {};
    updatedOpenItems[itemIndex] = {};
    updatedOpenItems[itemIndex][childIndex] = !openItems[itemIndex]?.[childIndex];
    setOpenItems(updatedOpenItems);
  };
  return (
    <>
      {/* <Container > */}
      <AppBar
        sx={{ backgroundColor: 'white', display: { xs: 'none', md: 'block', lg: 'block' } }}
        className={isSticky ? 'header is-sticky' : 'header'}
      >
        <Toolbar>
          <Container>
            <FlexBetween>
              <FlexBetween>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <img alt="LANDP" src="/logo.png" width="100px" />
                </Typography>
                <Dropdown>
                  <TriggerButton variant="outlined" display="flex">
                    <MenuIcon />
                    <Typography>Danh mục</Typography>
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
                <Link>
                  <IconButton
                    sx={{
                      borderRadius: '10px',
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: '40px' }} />
                    <Typography>
                      Chi <br /> nhánh
                    </Typography>
                  </IconButton>
                </Link>

                <Link>
                  <IconButton
                    sx={{
                      borderRadius: '10px',
                    }}
                  >
                    <NotificationsNoneIcon sx={{ fontSize: '40px' }} />
                    <Typography>
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
                  >
                    <ShoppingCartIcon sx={{ fontSize: '40px' }} />
                    <Typography>
                      Giỏ <br /> hàng
                    </Typography>
                  </IconButton>
                </Link>

                {!token ? (
                  <Link>
                    <IconButton
                      sx={{
                        borderRadius: '10px',
                      }}
                    >
                      <AccountCircleIcon sx={{ fontSize: '40px' }} />
                      <Typography>
                        Đăng <br />
                        nhập
                      </Typography>
                    </IconButton>
                  </Link>
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
            <Button sx={{ color: '#333333' }}>
              <HomeIcon sx={{ fontSize: '45px' }} />
              <Typography>Trang chủ</Typography>
            </Button>
            <Button sx={{ color: '#333333' }}>
              <StoreIcon sx={{ fontSize: '45px' }} />
              <Typography>Cửa hàng</Typography>
            </Button>

            <Button sx={{ color: '#333333' }}>
              <SupportAgentIcon sx={{ fontSize: '45px' }} />
              <Typography>Liên lạc</Typography>
            </Button>

            <Button sx={{ color: '#333333' }}>
              <NewspaperIcon sx={{ fontSize: '45px' }} />
              <Typography>Tin tức</Typography>
            </Button>
          </FlexBetween>
        </Container>
      </FlexBetween>

      <AppBar
        position="sticky"
        sx={{ display: { xs: 'block', md: 'none', lg: 'none' }, backgroundColor: 'white', padding: '5px' }}
      >
        <Toolbar>
          {/* Icon Menu cho mobile */}

          <img alt="LANDP" src="/logo.png" width="100px" />
          {/* Ô search */}
          <FlexBetween
            overflow="hidden"
            backgroundColor="white"
            borderRadius="50px"
            // padding="5px 10px"
            width="350px"
            border="2px solid rgb(221, 221, 227)"
            sx={{
              margin: '0 10px',
            }}
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
          <Link>
            <Badge
              badgeContent={4}
              sx={{
                color: 'inherit',
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: '40px' }} />
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileDrawerOpen} onClose={toggleMobileDrawer}>
        <List>
          {menu.map((menuItem, index) => (
            <div key={index}>
              <ListItem
                button
                onClick={() => handleMainClick(index)}
                sx={{ color: openItems[index] ? 'red' : 'black' }}
              >
                <ListItemIcon sx={{ color: openItems[index] ? 'red' : 'black' }}>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.title} />
                {openItems[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.children1.map((child1, index1) => (
                    <div key={index1}>
                      <ListItem
                        button
                        onClick={() => handleChildClick(index, index1)}
                        sx={{ color: openItems[index]?.[index1] ? 'red' : 'black' }}
                      >
                        <ListItemText primary={child1.titleChildren} />
                        {openItems[index]?.[index1] ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={openItems[index]?.[index1]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {child1.children2.map((child2, index2) => (
                            <ListItem button key={index2} sx={{ pl: 8 }}>
                              <ListItemText primary={child2.titleItem} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
      {/* </Container> */}
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
        />
        <BottomNavigationAction
          sx={{ maxWidth: '20%', minWidth: '20%', padding: '5px 0' }}
          label="Tư vấn "
          value="support"
          icon={<LocalPhoneIcon />}
        />
        <BottomNavigationAction
          sx={{ maxWidth: '20%', minWidth: '20%', padding: '5px 0' }}
          label="Tài khoản"
          value="account"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
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
