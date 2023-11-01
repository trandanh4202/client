import { Box, Container, Grid, Pagination, PaginationItem } from '@mui/material';
import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import CardNews from '~/components/cardNews/CardNews';
import FilterNews from './FilterNews/FilterNews';
import SortNews from './SortNews/SortNews';
import DrawerNews from './DrawerNews.jsx/DrawerNews';
const News = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <>
      <Container sx={{ padding: '0px 0px 60px 0px ' }}>
        <Box sx={{ margin: '40px 0' }}>
          <Grid container>
            <Grid item md={3} lg={2} sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
              <FilterNews />
            </Grid>
            <Grid item xs={12} md={9} lg={10} sx={{ padding: '0 10px' }}>
              <SortNews />
              <Box sx={{ marginTop: '10px' }}>
                <Grid container>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                </Grid>
              </Box>
              <Pagination
                page={page}
                count={10}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                color="primary"
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    color="primary"
                    to={`/store${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                    sx={{ margin: '0' }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <DrawerNews />
    </>
  );
};

export default News;
