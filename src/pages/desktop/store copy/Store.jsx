import { Box, Container, Grid, Pagination, PaginationItem } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FilterProduct from './FilterProduct/FilterProduct';
import SortProduct from './SortProduct/SortProduct';
import DrawerProduct from './DrawerProduct/DrawerProduct';
const Store = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <>
      <Container sx={{ padding: '0px 0px 60px 0px !important' }}>
        <Box sx={{ margin: '40px 0' }}>
          <Grid container>
            <Grid item md={3} lg={2} sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
              <FilterProduct />
            </Grid>
            <Grid item xs={12} md={9} lg={10} sx={{ padding: { xs: '0px', lg: '0 10px' } }}>
              <SortProduct />

              <Pagination
                page={page}
                count={10}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}
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
      <DrawerProduct />
    </>
  );
};

export default Store;
