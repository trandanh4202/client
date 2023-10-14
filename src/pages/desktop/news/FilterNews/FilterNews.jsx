import { Box, Checkbox, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

const FilterNews = () => {
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.name;
    if (categories.includes(categoryName)) {
      setCategories(categories.filter((category) => category !== categoryName));
    } else {
      setCategories([...categories, categoryName]);
    }
  };

  return (
    <Paper
      sx={{
        padding: '10px 20px 10px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '16px',
        }}
      >
        Danh mục sản phẩm
      </Typography>

      <Box>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '15px',
          }}
        >
          Loại sản phẩm
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="SmartPhone" />}
            label="Điện thoại"
            onChange={handleCategoryChange}
          />
          <FormControlLabel control={<Checkbox name="Laptop" />} label="Laptop" onChange={handleCategoryChange} />
          <FormControlLabel
            control={<Checkbox name="Tablet" />}
            label="Máy tính bảng"
            onChange={handleCategoryChange}
          />
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default FilterNews;
