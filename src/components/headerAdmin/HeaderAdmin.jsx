import { AppBar, Container, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import FlexBetween from '../flexbetween/FlexBetween';

const HeaderAdmin = () => {
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

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AppBar
      sx={{
        backgroundColor: 'white',
        display: { xs: 'none', md: 'block', lg: 'block' },
        position: 'sticky',
        marginBottom: '40px',
      }}
    >
      <Toolbar>
        <Container>
          <FlexBetween>
            <FlexBetween>
              <Link variant="h6" to="/" sx={{ flexGrow: 1 }}>
                <img alt="LANDP" src="/logo.png" width="100px" />
              </Link>
            </FlexBetween>
          </FlexBetween>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAdmin;
