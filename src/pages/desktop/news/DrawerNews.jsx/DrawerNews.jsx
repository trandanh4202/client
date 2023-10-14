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
} from '@mui/material';
import React, { useState } from 'react';

const DrawerNews = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const deleteAllFilter = () => {
    setCategories([]);
  };
  const handleCategoryChange = (event) => {
    const categoryName = event.target.name;
    if (categories.includes(categoryName)) {
      setCategories(categories.filter((category) => category !== categoryName));
    } else {
      setCategories([...categories, categoryName]);
    }
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
  );
};

export default DrawerNews;
