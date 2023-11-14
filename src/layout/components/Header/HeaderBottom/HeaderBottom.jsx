import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StoreIcon from '@mui/icons-material/Store';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
  return (
    <FlexBetween
      width="100%"
      backgroundColor="grey"
      sx={{ display: { xs: 'none', md: 'block', lg: 'block' }, marginTop: { xs: '0px', md: '117px', lg: '117px' } }}
    >
      <Container>
        <FlexBetween gap="70px">
          <Button sx={{ color: '#333333' }} component={Link} to="">
            <HomeIcon sx={{ fontSize: '45px', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Trang chủ</Typography>
          </Button>
          <Button sx={{ color: '#333333' }} component={Link} to="store">
            <StoreIcon sx={{ fontSize: '45px', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Cửa hàng</Typography>
          </Button>

          <Button sx={{ color: '#333333' }} component={Link} to="/contact">
            <SupportAgentIcon sx={{ fontSize: '45px', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Liên lạc</Typography>
          </Button>

          <Button sx={{ color: '#333333' }} component={Link} to="news">
            <NewspaperIcon sx={{ fontSize: '45px', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>Tin tức</Typography>
          </Button>
        </FlexBetween>
      </Container>
    </FlexBetween>
  );
};

export default HeaderBottom;
