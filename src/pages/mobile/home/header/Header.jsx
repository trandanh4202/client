import { Search, SearchOutlined, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, Container, Divider, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
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
  console.log(isSticky);
  return (
    <>
      <AppBar
        position="sticky"
        // sx={{
        //   display: { xs: 'block', md: 'none', lg: 'none' },

        //   backgroundColor: '#1435C3',
        //   padding: '10px 0  ',
        // }}
        sx={{
          backgroundColor: '#1435C3',
          justifyContent: 'center',
          padding: '10px 0  ',
          boxShadow: 'none',
        }}
        className={isSticky ? 'header is-sticky' : 'header'}
      >
        <Toolbar sx={{ flexDirection: 'column', minHeight: '0px', gap: '10px' }}>
          {/* Icon Menu cho mobile */}
          <FlexBetween sx={{ height: '100%', width: '100%', marginBottm: '10px', display: isSticky ? 'none' : 'flex' }}>
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
          <FlexBetween sx={{ width: '100%' }}>
            <FlexBetween
              overflow="hidden"
              backgroundColor="white"
              borderRadius="10px"
              // padding="5px 10px"
              width="100%"
              border="2px solid rgb(221, 221, 227)"
              sx={{
                margin: '0 10px',
              }}
            >
              <InputBase
                placeholder="Bạn muốn mua gì hôm nay?"
                fullWidth
                sx={{ paddingRight: '20px', paddingLeft: '10px', fontSize: '13px' }}
              />
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
            <Box
              component={Link}
              sx={{
                display: isSticky ? 'block' : 'none',
              }}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCart sx={{ color: 'white', fontSize: '30px' }} />
              </Badge>
            </Box>
          </FlexBetween>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          '::after': {
            content: '""',
            display: 'block',
            backgroundColor: '#1435C3',
            height: '70px',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            overflow: 'hidden',
            width: '100%',
          },
        }}
      />
    </>
  );
};

export default Header;
