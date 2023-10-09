import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MenuMobile = (props) => {
  const { open, onClose } = props;
  const [openItems, setOpenItems] = useState({}); // Trạng thái mở/rút gọn cho từng ListItem và cấp con

  const handleMainClick = (itemIndex) => {
    // Đóng tất cả các Collapse khác
    const updatedOpenItems = {};
    updatedOpenItems[itemIndex] = !openItems[itemIndex];
    setOpenItems(updatedOpenItems);
  };

  const handleChildClick = (itemIndex, childIndex) => {
    // Đóng tất cả các Collapse khác và mở Collapse mới
    const updatedOpenItems = {};
    updatedOpenItems[itemIndex] = {};
    updatedOpenItems[itemIndex][childIndex] = !openItems[itemIndex]?.[childIndex];
    setOpenItems(updatedOpenItems);
  };
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        {menu.map((menuItem, index) => (
          <div key={index}>
            <ListItem onClick={() => handleMainClick(index)} sx={{ color: openItems[index] ? 'red' : 'black' }}>
              <ListItemIcon sx={{ color: openItems[index] ? 'red' : 'black' }}>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.title} />
              {openItems[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menuItem.children1.map((child1, index1) => (
                  <div key={index1}>
                    <ListItem
                      onClick={() => handleChildClick(index, index1)}
                      sx={{ color: openItems[index]?.[index1] ? 'red' : 'black' }}
                    >
                      <ListItemText primary={child1.titleChildren} />
                      {openItems[index]?.[index1] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openItems[index]?.[index1]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {child1.children2.map((child2, index2) => (
                          <ListItem key={index2} sx={{ pl: 8 }}>
                            <ListItemText primary={child2.titleItem} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuMobile;
const menu = [
  {
    icon: <MenuIcon />,
    title: 'Laptop',
    children1: [
      {
        titleChildren: 'Thương hiệu',
        children2: [
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
        ],
      },
    ],
  },
  {
    icon: <MenuIcon />,
    title: 'Laptop',
    children1: [
      {
        titleChildren: 'Thương hiệu',
        children2: [
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
          {
            titleItem: 'Asus',
          },
        ],
      },
    ],
  },
];
