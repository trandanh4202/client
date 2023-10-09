import React, { useEffect } from 'react';
import SidebarProfile from '../components/SidebarProfile/SidebarProfile';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

const ProfileLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('setting');
  }, []);
  return (
    <>
      <Container sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <Grid container>
          <Grid item xs={3} sx={{ padding: '5px 15px' }}>
            <SidebarProfile />
          </Grid>
          <Grid item xs={9} sx={{ padding: '5px 15px' }}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProfileLayout;
