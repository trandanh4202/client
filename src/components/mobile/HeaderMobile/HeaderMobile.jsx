import { AppBar, Badge, Divider, IconButton, InputBase, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderMobile = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ display: { xs: 'block', md: 'none', lg: 'none' }, backgroundColor: 'white', padding: '5px' }}
    >
      <Toolbar>
        {/* Icon Menu cho mobile */}
        <Link to="">
          <img alt="LANDP" src="/logo.png" width="100px" />
        </Link>
        {/* Ô search */}
        <FlexBetween
          overflow="hidden"
          backgroundColor="white"
          borderRadius="10px  "
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
  );
};

export default HeaderMobile;
