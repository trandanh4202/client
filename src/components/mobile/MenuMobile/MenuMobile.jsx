import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';

const MenuMobile = (props) => {
  const { open, onClose } = props;
  const [openItems, setOpenItems] = useState({}); // Trạng thái mở/rút gọn cho từng ListItem và cấp con
  const menus = useSelector((state) => state.menus.menus);
  const handleMainClick = (itemIndex) => {
    const updatedOpenItems = {};
    updatedOpenItems[itemIndex] = !openItems[itemIndex];
    setOpenItems(updatedOpenItems);
  };

  const handleChildClick = (itemIndex, childIndex) => {
    const updatedOpenItems = {};
    updatedOpenItems[itemIndex] = {};
    updatedOpenItems[itemIndex][childIndex] = !openItems[itemIndex]?.[childIndex];
    setOpenItems(updatedOpenItems);
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
      <List>
        {menus?.map((menuItem, index) => (
          <div key={index}>
            <ListItem onClick={() => handleMainClick(index)} sx={{ color: openItems[index] ? 'red' : 'black' }}>
              {/* <ListItemIcon sx={{ color: openItems[index] ? 'red' : 'black' }}>{menuItem.icon}</ListItemIcon> */}
              <ListItemText primary={menuItem.slugName} />
              {openItems[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menuItem.childrenMenu?.map((child1, index1) => (
                  <div key={index1}>
                    <ListItem
                      onClick={() => handleChildClick(index, index1)}
                      sx={{ color: openItems[index]?.[index1] ? 'red' : 'black' }}
                    >
                      <ListItemText primary={child1.slugName} />
                      {openItems[index]?.[index1] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openItems[index]?.[index1]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {child1.childrenMenu.map((child2, index2) => (
                          <ListItem key={index2} sx={{ pl: 8 }}>
                            <ListItemText primary={child2.slugName} />
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
