import { Box, Button, FormControlLabel, List, ListItem, Modal, Paper, Radio, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { getAddresses } from '~/features/address/addressSlice';

const CheckoutInfor = () => {
  const [open, setOpen] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState('Địa chỉ 3'); // Địa chỉ mặc định
  const [selectedAddress, setSelectedAddress] = useState(null);
  const addresses = useSelector((state) => state.addresses.addresses);
  const handleOpen = () => {
    setOpen(true);
    setSelectedAddress(defaultAddress);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(selectedAddress, defaultAddress);
  const handleAddressClick = (id) => {
    if (defaultAddress) {
      setSelectedAddress(defaultAddress);
      if (selectedAddress) {
        setSelectedAddress(id);
      }
    }
  };

  const handleConfirm = () => {
    if (selectedAddress) {
      setDefaultAddress(selectedAddress); // Đặt địa chỉ đã chọn làm mặc định
    }
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);
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
        <Typography sx={{ fontSize: { xs: '15px', lg: '20px' }, fontWeight: '700' }}>Thông tin nhận hàng</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Typography sx={{ fontSize: { xs: '13px', lg: '15px' } }}>
          Trần Trọng Danh ( 0913423421 ) - Khóm 2, Thị trấn Cái Đôi Vàm, huyện Phú Tân, tỉnh Cà Mau{' '}
        </Typography>
        <Button variant="outlined" onClick={handleOpen} sx={{ padding: '6px 3px', fontSize: '11px' }}>
          Thay đổi
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              width: '800px',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography sx={{ fontSize: '15px' }}>Chọn địa chỉ</Typography>
            <List>
              {addresses.map((address, index) => (
                <ListItem key={index} onClick={() => handleAddressClick(address.id)}>
                  <FormControlLabel
                    sx={{ fontSize: '9px' }}
                    control={<Radio checked={selectedAddress === address.id} />}
                    label={`${address.detail}, ${address.wardName}, ${address.districtName}, ${address.provinceName}`}
                  />
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
