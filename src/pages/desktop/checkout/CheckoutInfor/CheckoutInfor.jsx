import { Box, Button, FormControlLabel, List, ListItem, Modal, Paper, Radio, Typography } from '@mui/material';
import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CheckoutInfor = () => {
  const [open, setOpen] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState('Địa chỉ 3'); // Địa chỉ mặc định
  const [selectedAddress, setSelectedAddress] = useState(null);

  const addresses = ['Địa chỉ 1', 'Địa chỉ 2', 'Địa chỉ 3']; // Thay thế bằng danh sách địa chỉ của bạn
  const handleOpen = () => {
    setOpen(true);
    setSelectedAddress(defaultAddress);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(selectedAddress, defaultAddress);
  const handleAddressClick = (address) => {
    if (defaultAddress) {
      setSelectedAddress(defaultAddress);
      if (selectedAddress) {
        setSelectedAddress(address);
      }
    }
  };

  const handleConfirm = () => {
    if (selectedAddress) {
      setDefaultAddress(selectedAddress); // Đặt địa chỉ đã chọn làm mặc định
    }
    setOpen(false);
  };
  return (
    <Paper
      sx={{
        padding: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          color: '#f61900',
        }}
      >
        <LocationOnIcon />
        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>Thông tin nhận hàng</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Typography>
          Trần Trọng Danh ( 0913423421 ) - Khóm 2, Thị trấn Cái Đôi Vàm, huyện Phú Tân, tỉnh Cà Mau{' '}
        </Typography>
        <Button variant="outlined" onClick={handleOpen}>
          Thay đổi
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              width: 300,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography>Chọn địa chỉ</Typography>
            <List>
              {addresses.map((address, index) => (
                <ListItem key={index} button onClick={() => handleAddressClick(address)}>
                  <FormControlLabel control={<Radio checked={selectedAddress === address} />} label={address} />
                </ListItem>
              ))}
            </List>
            <Button color="primary" onClick={handleClose}>
              Hủy
            </Button>
            <Button color="primary" onClick={handleConfirm}>
              Xác nhận
            </Button>
          </Box>
        </Modal>
      </Box>
    </Paper>
  );
};

export default CheckoutInfor;
