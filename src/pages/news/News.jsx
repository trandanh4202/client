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
import CardNews from '~/components/cardNews/CardNews';
const News = () => {
  const colorss = ['black', 'white', 'yellow', 'blue', 'grey'];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.name;
    if (categories.includes(categoryName)) {
      setCategories(categories.filter((category) => category !== categoryName));
    } else {
      setCategories([...categories, categoryName]);
    }
  };

  const deleteAllFilter = () => {
    setCategories([]);
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
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
                  </Grid>
                  <Grid item md={4} padding="10px" margin="10px 0px ">
                    <CardNews />
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

export default News;
