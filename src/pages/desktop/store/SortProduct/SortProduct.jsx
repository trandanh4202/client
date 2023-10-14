import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select, ToggleButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ProductCard from '~/components/productCard/ProductCard';

const SortProduct = () => {
  const [gridView, setGridView] = useState('2.4');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <Paper sx={{ display: { xs: 'block', lg: 'block' } }}>
        <FlexBetween>
          <Box sx={{ margin: '10px', display: 'flex', gap: '10px' }}>
            <ToggleButton
              value="list"
              aria-label="list"
              onClick={() => setDrawerOpen(true)}
              sx={{
                padding: { xs: '2px', lg: '11px' },
                backgroundColor: '#f3f4f6',
                display: { xs: 'flex', lg: 'none' },
              }}
            >
              <FilterAltIcon />
              <Typography sx={{ fontSize: '13px' }}>Bộ lọc</Typography>
            </ToggleButton>

            <ToggleButton
              value="list"
              aria-label="list"
              onClick={() => setGridView(12)}
              sx={{ padding: { xs: '0', lg: '11px' } }}
            >
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton
              value="module"
              aria-label="module"
              onClick={() => setGridView(2.4)}
              sx={{ padding: { xs: '0', lg: '11px' } }}
            >
              <ViewModuleIcon />
            </ToggleButton>
          </Box>
          <Box>
            <FormControl sx={{ margin: '10px', minWidth: '170px' }}>
              <InputLabel id="filter" sx={{ top: '-10px' }}>
                Lọc sản phẩm
              </InputLabel>
              <Select
                labelId="filter"
                id="select"
                value={filter}
                onChange={handleChange}
                autoWidth
                label="Tính năng"
                sx={{
                  '& div': {
                    padding: '4px 32px 5px 0',
                    fontSize: '13px',
                  },
                }}
              >
                <MenuItem value="">
                  <Typography>Mặc định</Typography>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </FlexBetween>
      </Paper>
      <Box sx={{ marginTop: '10px' }}>
        <Grid container>
          <Grid item xs={gridView === 12 ? 12 : 6} md={4} lg={gridView} padding="5px" margin="10px 0px ">
            <ProductCard gridView={gridView} />
          </Grid>
          <Grid item xs={gridView === 12 ? 12 : 6} md={4} lg={gridView} padding="5px" margin="10px 0px ">
            <ProductCard gridView={gridView} />
          </Grid>
          <Grid item xs={gridView === 12 ? 12 : 6} md={4} lg={gridView} padding="5px" margin="10px 0px ">
            <ProductCard gridView={gridView} />
          </Grid>
          <Grid item xs={gridView === 12 ? 12 : 6} md={4} lg={gridView} padding="5px" margin="10px 0px ">
            <ProductCard gridView={gridView} />
          </Grid>
          <Grid item xs={gridView === 12 ? 12 : 6} md={4} lg={gridView} padding="5px" margin="10px 0px ">
            <ProductCard gridView={gridView} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SortProduct;
