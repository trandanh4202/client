import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemText,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';

const DrawerProduct = () => {
  const colorss = ['black', 'white', 'yellow', 'blue', 'grey'];
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
  const deleteAllFilter = () => {
    setCategories([]);
    setBrands([]);
    setSelectedColors([]);
    setPriceRange([0, 1000]);
  };
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
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
        <List>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
              alignItems: 'normal',
            }}
          >
            <ListItemText
              primary="Thương hiệu"
              sx={{
                '& span': {
                  fontWeight: '700',
                  fontSize: '20px',
                },
              }}
            />
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
                control={<Checkbox name="Asus" checked={brands.includes('Asus')} />}
                label="Asus"
                onChange={handleBrandChange}
              />
              <FormControlLabel
                control={<Checkbox name="Dell" checked={brands.includes('Dell')} />}
                label="Dell"
                onChange={handleBrandChange}
              />
              <FormControlLabel
                control={<Checkbox name="Apple" checked={brands.includes('Apple')} />}
                label="Apple"
                onChange={handleBrandChange}
              />
            </FormGroup>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
              alignItems: 'normal',
            }}
          >
            <ListItemText
              primary="Thương hiệu"
              sx={{
                '& span': {
                  fontWeight: '700',
                  fontSize: '20px',
                },
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="Asus" checked={brands.includes('Asus')} />}
                label="Asus"
                onChange={handleBrandChange}
              />
              <FormControlLabel
                control={<Checkbox name="Dell" checked={brands.includes('Dell')} />}
                label="Dell"
                onChange={handleBrandChange}
              />
              <FormControlLabel
                control={<Checkbox name="Apple" checked={brands.includes('Apple')} />}
                label="Apple"
                onChange={handleBrandChange}
              />
            </FormGroup>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
              alignItems: 'normal',
            }}
          >
            <ListItemText
              primary="Thương hiệu"
              sx={{
                '& span': {
                  fontWeight: '700',
                  fontSize: '20px',
                },
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="Asus" checked={brands.includes('Asus')} />}
                label="Asus"
                onChange={handleBrandChange}
              />
              <FormControlLabel
                control={<Checkbox name="Dell" checked={brands.includes('Dell')} />}
                label="Dell"
                onChange={handleBrandChange}
              />
              <FormControlLabel
                control={<Checkbox name="Apple" checked={brands.includes('Apple')} />}
                label="Apple"
                onChange={handleBrandChange}
              />
            </FormGroup>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
              alignItems: 'normal',
            }}
          >
            <ListItemText
              primary="Loại sản phẩm"
              sx={{
                '& span': {
                  fontWeight: '700',
                  fontSize: '20px',
                },
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="SmartPhone" checked={categories.includes('Asus')} />}
                label="Điện thoại"
                onChange={handleCategoryChange}
              />
              <FormControlLabel
                control={<Checkbox name="Laptop" checked={categories.includes('Asus')} />}
                label="Laptop"
                onChange={handleCategoryChange}
              />
              <FormControlLabel
                control={<Checkbox name="Tablet" checked={categories.includes('Asus')} />}
                label="Máy tính bảng"
                onChange={handleCategoryChange}
              />
            </FormGroup>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
              alignItems: 'normal',
            }}
          >
            <ListItemText
              primary="Màu sắc"
              sx={{
                '& span': {
                  fontWeight: '700',
                  fontSize: '20px',
                },
              }}
            />
            <ToggleButtonGroup
              value={selectedColors}
              onChange={handleColorChange}
              aria-label="Màu sắc"
              sx={{
                flexWrap: 'wrap',
              }}
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
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
              alignItems: 'normal',
            }}
          >
            <ListItemText
              primary="Giá cả"
              sx={{
                '& span': {
                  fontWeight: '700',
                  fontSize: '20px',
                },
              }}
            />
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
          </ListItem>
        </List>
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
