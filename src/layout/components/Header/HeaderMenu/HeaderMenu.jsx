import { Dropdown } from '@mui/base';
import { Box, Paper, Typography, menuItemClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MenuButton } from '@mui/base';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '~/features/menu/menuSlice';

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
const HeaderMenu = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleMouseEnter = (categoryID) => {
    setActiveModal(categoryID);
  };

  const handleMouseLeave = () => {
    setActiveModal(null);
  };
  const dispatch = useDispatch();
  const menues = useSelector((state) => state.menus.menus);
  useEffect(() => {
    dispatch(getMenus());
  }, [dispatch]);
  return (
    <Dropdown>
      <TriggerButton variant="outlined">
        <MenuIcon sx={{ marginRight: '10px' }} />
        <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Danh mục</Typography>
      </TriggerButton>
      <StyledMenu slots={{ listbox: StyledListbox }}>
        {menues?.map((menu) => (
          <StyledMenuItem
            onMouseEnter={() => handleMouseEnter(menu.slugId)}
            onMouseLeave={handleMouseLeave} // Khi rời chuột khỏi thẻ Link, ẩn Paper
          >
            <Link to="" fullWidth className="Hello">
              <MenuIcon sx={{ marginRight: '10px' }} />
              {menu.slugName}
            </Link>
            {activeModal === menu.slugId && (
              <Paper className="modal-content" onMouseLeave={handleMouseLeave}>
                {menu.childrenMenu?.map((item) => (
                  <Box
                    key={item.slugId}
                    sx={{
                      margin: '10px',
                    }}
                  >
                    <Typography className="title">{item.slugName}</Typography>
                    {item.childrenMenu?.map((item) => (
                      <Link to={item.slugName} className="link_paper">
                        {item}
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
  );
};

export default HeaderMenu;

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
  // transform: translate(110px, 150px) !important ; // Điều chỉnh khoảng cách theo y tùy ý
  // position: fixed !important;
  z-index: 1111;
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
