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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import { getProducts } from '~/features/products/productsSlice';

const FilterProduct = () => {
  const listProducts = useSelector((state) => state.products.products);

  const { products, maxprice, filterable } = listProducts;
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  useEffect(() => {
    if (maxprice) {
      setPriceRange([0, maxprice]);
    }
  }, [maxprice]);

  const dispatch = useDispatch();

  const handleFromPriceChange = (event) => {
    let newFromPrice = parseInt(event.target.value);
    if (isNaN(newFromPrice) || newFromPrice < 0) {
      newFromPrice = 0;
    } else if (newFromPrice > maxprice) {
      newFromPrice = maxprice;
    }
    setPriceRange([newFromPrice, maxprice]);
  };
  const handleToPriceChange = (event) => {
    let newToPrice = parseInt(event.target.value);
    if (isNaN(newToPrice) || newToPrice > maxprice) {
      newToPrice = maxprice;
    } else if (newToPrice < priceRange[0]) {
      newToPrice = priceRange[0];
    }
    setPriceRange([priceRange[0], newToPrice]);
  };
  const handlePriceChange = (event, newValue) => {
    console.log(newValue);
    setPriceRange(newValue);
  };
  const [selectedFilters, setSelectedFilters] = useState([]); // Thêm state để lưu các filter được chọn

  // Handler khi checkbox thay đổi
  const handleCheckboxChange = (event, filterCode, optionId) => {
    if (event.target.checked) {
      // Nếu được chọn, thêm filter vào mảng selectedFilters
      setSelectedFilters((prevFilters) => [...prevFilters, { code: filterCode, optionsId: [optionId] }]);
    } else {
      // Nếu bỏ chọn, loại bỏ filter khỏi mảng selectedFilters
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter.code !== filterCode || filter.optionsId[0] !== optionId),
      );
    }
  };
  useEffect(() => {
    dispatch(getProducts({ selectedFilters }));
  }, [dispatch, selectedFilters]);
  console.log(selectedFilters);
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
          max={maxprice}
          step={1000}
          size="medium"
          valueLabelDisplay="auto"
          sx={{
            color: '#1435c3',
          }}
        />
      </Box>
      {filterable?.map((filter) => (
        <Box key={filter.code} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '15px',
            }}
          >
            {filter.codeName}
          </Typography>
          <FormGroup>
            {filter.options.map((option) => (
              <FormControlLabel
                key={option.optionId}
                control={
                  <Checkbox
                    name={option.optionName}
                    onChange={(event) => handleCheckboxChange(event, filter.code, option.optionId)}
                  />
                }
                label={option.optionName}
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
            ))}
          </FormGroup>
        </Box>
      ))}
    </Paper>
  );
};

export default FilterProduct;
