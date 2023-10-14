import { Search, SearchOutlined, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Container, Divider, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';

const Header = () => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          display: { xs: 'block', md: 'none', lg: 'none' },

          backgroundColor: '#1435C3',
          padding: '10px 0  ',
        }}
      >
        <Toolbar sx={{ flexDirection: 'column' }}>
          {/* Icon Menu cho mobile */}
          <FlexBetween sx={{ height: '100%', width: '100%', marginBottm: '10px' }}>
            <Link to="" style={{ height: '38px' }}>
              <FlexBetween sx={{ height: '100%' }}>
                <img alt="LANDP" src="/logo.png" height="100%" style={{ objectFit: 'contain' }} />
                <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '600', marginLeft: '10px' }}>
                  LandP.Vn
                </Typography>
              </FlexBetween>
            </Link>
            <Link>
              <Badge badgeContent={4} color="error">
                <ShoppingCart sx={{ color: 'white', fontSize: '30px' }} />
              </Badge>
            </Link>
          </FlexBetween>
          <FlexBetween
            overflow="hidden"
            backgroundColor="white"
            borderRadius="10px"
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
                padding: '0px 8px',
                borderRadius: '0%',
              }}
            >
              <SearchOutlined />
            </IconButton>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
