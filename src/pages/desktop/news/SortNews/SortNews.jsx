import { Box, FormControl, InputLabel, MenuItem, Paper, Select, ToggleButton, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const SortNews = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
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
  );
};

export default SortNews;
