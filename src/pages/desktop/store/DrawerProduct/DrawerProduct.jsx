import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  Paper,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import { getProducts } from '~/features/products/productsSlice';

const DrawerProduct = (props) => {
  const { open, onClose } = props;
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    handleGetProduct();
  };

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

  const deleteAllFilter = () => {
    setPriceRange([0, 1000]);
  };
  const [selectedFilters, setSelectedFilters] = useState([]);
  const handleCheckboxChange = (event, filterCode, optionId) => {
    if (event.target.checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, { code: filterCode, optionsId: [optionId] }]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter.code !== filterCode || filter.optionsId[0] !== optionId),
      );
    }
  };
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.products.products);

  const { products, maxprice, filterable } = listProducts;
  useEffect(() => {
    if (maxprice) {
      setPriceRange([0, maxprice]);
    }
  }, [maxprice]);
  const handleGetProduct = () => {
    dispatch(getProducts({ selectedFilters }));
  };
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '60%',
          // padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'scroll',
          height: '100%',
        },
      }}
    >
      <Box role="presentation" sx={{ height: '100%', maxHeight: '100%', overflowY: 'scroll' }}>
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          padding: '12px 16px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button
          onClick={deleteAllFilter}
          onKeydown={deleteAllFilter}
          sx={{
            color: 'rgb(20, 53, 195)',
            border: '1px solid rgb(20, 53, 195)',
            backgroundColor: 'rgb(255, 255, 255)',
            fontSize: '13px',
            padding: '5px 8xp',
            borderRadius: '4px',
          }}
        >
          Xoá bộ lọc
        </Button>
        <Button
          onClick={toggleDrawer}
          onKeydown={toggleDrawer}
          sx={{
            backgroundColor: 'rgb(20, 53, 195)',
            color: 'rgb(255, 255, 255)',
            padding: '5px 8xp',
            borderRadius: '4px',
            fontSize: '13px',
          }}
        >
          Áp dụng
        </Button>
      </Box>
    </Drawer>
  );
};

export default DrawerProduct;
