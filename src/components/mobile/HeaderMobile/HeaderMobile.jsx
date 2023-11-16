import { AppBar, Badge, Divider, IconButton, InputBase, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderMobile = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    navigate(`/store?q=${searchValue}`);
  };
  return (
    <AppBar
      position="sticky"
      sx={{ display: { xs: 'block', md: 'none', lg: 'none' }, backgroundColor: 'white', padding: '5px 10px' }}
    >
      <Toolbar sx={{ padding: '0' }}>
        {/* Icon Menu cho mobile */}
        <Link to="">
          <img alt="LANDP" src="/logo.png" style={{ width: '80px' }} />
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
          <InputBase
            placeholder="Search..."
            fullWidth
            sx={{ paddingRight: '20px', paddingLeft: '10px' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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
        <Link to="/cart">
          {/* <Badge badgeContent={4} color="primary" sx={{ color: 'inherit', overFlow: 'hidden' }}> */}
          <ShoppingCartIcon sx={{ fontSize: '40px', color: 'blue' }} />
          {/* </Badge> */}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
