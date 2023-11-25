import { Box, Container, Grid, Pagination, PaginationItem } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import FilterProduct from './FilterProduct/FilterProduct';
import SortProduct from './SortProduct/SortProduct';
import DrawerProduct from './DrawerProduct/DrawerProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '~/features/products/productsSlice';

const Store = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.products.products.pagination);

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
                // page={page}
                count={pagination?.totalPage}
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
    </>
  );
};

export default Store;
