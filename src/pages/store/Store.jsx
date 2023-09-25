import {
  Box,
  Button,
  Checkbox,
  Container,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  Select,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ProductCard from '~/components/productCard/ProductCard';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link, useLocation } from 'react-router-dom';
const Store = () => {
  const colorss = ['black', 'white', 'yellow', 'blue', 'grey'];

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filter, setFilter] = useState('');
  const [gridView, setGridView] = useState('2.4');
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log('brands', brands);
  console.log('categories', categories);
  console.log('selectedColors', selectedColors);
  console.log('priceRange', priceRange);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    // deleteAllFilter();
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
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
    // toggleDrawer();
  };
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <>
      <Container sx={{ padding: '0px 0px 60px 0px !important' }}>
        <Box sx={{ margin: '40px 0' }}>
          <Grid container>
            <Grid item md={3} lg={2} sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
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
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: '15px',
                    }}
                  >
                    Thương hiệu
                  </Typography>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox name="Asus" />} label="Asus" onChange={handleBrandChange} />
                    <FormControlLabel control={<Checkbox name="Dell" />} label="Dell" onChange={handleBrandChange} />
                    <FormControlLabel control={<Checkbox name="Apple" />} label="Apple" onChange={handleBrandChange} />
                  </FormGroup>
                </Box>
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
                    <FormControlLabel
                      control={<Checkbox name="Laptop" />}
                      label="Laptop"
                      onChange={handleCategoryChange}
                    />
                    <FormControlLabel
                      control={<Checkbox name="Tablet" />}
                      label="Máy tính bảng"
                      onChange={handleCategoryChange}
                    />
                  </FormGroup>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: '500',
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
                      fontWeight: '500',
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
            </Grid>
            <Grid item xs={12} md={9} lg={10} sx={{ padding: '0 10px' }}>
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
                  />
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
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
            {/* <ListItem>
              <ListItemText primary="Danh mục sản phẩm" sx={{ fontWeight: '700', fontSize: '18px' }} />
            </ListItem> */}
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
    </>
  );
};

export default Store;
