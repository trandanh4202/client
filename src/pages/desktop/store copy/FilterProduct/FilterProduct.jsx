import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';

const FilterProduct = () => {
  const colorss = ['black', 'white', 'yellow', 'blue', 'grey'];

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const handleBrandChange = (event) => {
    const brandName = event.target.name;
    if (brands.includes(brandName)) {
      setBrands(brands.filter((brand) => brand !== brandName));
    } else {
      setBrands([...brands, brandName]);
    }
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.name;
    if (categories.includes(categoryName)) {
      setCategories(categories.filter((category) => category !== categoryName));
    } else {
      setCategories([...categories, categoryName]);
    }
  };
  const handleFromPriceChange = (event) => {
    let newFromPrice = parseInt(event.target.value);
    if (isNaN(newFromPrice) || newFromPrice < 0) {
      newFromPrice = 0;
    } else if (newFromPrice > priceRange[1]) {
      newFromPrice = priceRange[1];
    }
    setPriceRange([newFromPrice, priceRange[1]]);
  };
  const handleToPriceChange = (event) => {
    let newToPrice = parseInt(event.target.value);
    if (isNaN(newToPrice) || newToPrice > 1000) {
      newToPrice = 1000;
    } else if (newToPrice < priceRange[0]) {
      newToPrice = priceRange[0];
    }
    setPriceRange([priceRange[0], newToPrice]);
  };
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleColorChange = (event, newColors) => {
    setSelectedColors(newColors);
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
          fontWeight: '800',
          fontSize: '16px',
        }}
      >
        Danh mục sản phẩm
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '15px',
          }}
        >
          Thương hiệu
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="Asus" />}
            label="Asus"
            onChange={handleBrandChange}
            sx={{
              '&:hover': {
                backgroundColor: '#f3f5fc',
                color: '#1435c3',
              },
              '& .MuiFormControlLabel-label ': {
                fontWeight: '500',
              },
            }}
          />
          <FormControlLabel
            sx={{
              '&:hover': {
                backgroundColor: '#f3f5fc',
                color: '#1435c3',
              },
              '& .MuiFormControlLabel-label ': {
                fontWeight: '500',
              },
            }}
            control={<Checkbox name="Dell" />}
            label="Dell"
            onChange={handleBrandChange}
          />
          <FormControlLabel
            sx={{
              '&:hover': {
                backgroundColor: '#f3f5fc',
                color: '#1435c3',
              },
              '& .MuiFormControlLabel-label ': {
                fontWeight: '500',
              },
            }}
            control={<Checkbox name="Apple" />}
            label="Apple"
            onChange={handleBrandChange}
          />
        </FormGroup>
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '15px',
          }}
        >
          Loại sản phẩm
        </Typography>
        <FormGroup>
          <FormControlLabel
            sx={{
              '&:hover': {
                backgroundColor: '#f3f5fc',
                color: '#1435c3',
              },
              '& .MuiFormControlLabel-label ': {
                fontWeight: '500',
              },
            }}
            control={<Checkbox name="SmartPhone" />}
            label="Điện thoại"
            onChange={handleCategoryChange}
          />
          <FormControlLabel
            sx={{
              '&:hover': {
                backgroundColor: '#f3f5fc',
                color: '#1435c3',
              },
              '& .MuiFormControlLabel-label ': {
                fontWeight: '500',
              },
            }}
            control={<Checkbox name="Laptop" />}
            label="Laptop"
            onChange={handleCategoryChange}
          />
          <FormControlLabel
            sx={{
              '&:hover': {
                backgroundColor: '#f3f5fc',
                color: '#1435c3',
              },
              '& .MuiFormControlLabel-label ': {
                fontWeight: '500',
              },
            }}
            control={<Checkbox name="Tablet" />}
            label="Máy tính bảng"
            onChange={handleCategoryChange}
          />
        </FormGroup>
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '15px',
          }}
        >
          Màu sắc
        </Typography>
        <ToggleButtonGroup
          value={selectedColors}
          onChange={handleColorChange}
          aria-label="Màu sắc"
          sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {colorss.map((color) => (
            <ToggleButton
              key={color}
              value={color}
              style={{
                backgroundColor: color,
                border: selectedColors.includes(color) ? `3px solid red` : '3px solid black',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                margin: '5px',
              }}
            />
          ))}
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '15px',
          }}
        >
          Giá cả
        </Typography>
        <FlexBetween sx={{ marginTop: '10px' }}>
          <TextField
            label="Từ"
            value={priceRange[0]}
            onChange={handleFromPriceChange}
            sx={{
              width: '45%',
              '& input': {
                padding: '5px 10px',
                fontSize: '15px',
              },
            }}
          />
          <TextField
            label="Đến"
            value={priceRange[1]}
            onChange={handleToPriceChange}
            sx={{
              width: '45%',
              '& input': {
                padding: '5px 10px',
                fontSize: '15px',
              },
            }}
          />
        </FlexBetween>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          min={0}
          max={1000}
          step={10}
          size="medium"
          valueLabelDisplay="auto"
          sx={{
            color: '#1435c3',
          }}
        />
      </Box>
    </Paper>
  );
};

export default FilterProduct;
