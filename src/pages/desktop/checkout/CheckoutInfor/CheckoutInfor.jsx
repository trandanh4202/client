import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  List,
  ListItem,
  Modal,
  Paper,
  Radio,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { getAddressById, getAddresses } from '~/features/address/addressSlice';

const CheckoutInfor = () => {
  const [open, setOpen] = useState(false);
  const addresses = useSelector((state) => state?.addresses?.addresses);
  const loading = useSelector((state) => state.addresses.loading);

  const defaultAddress = addresses?.find((address) => address?.isDefault);
  const defaultAddressId = defaultAddress?.id;

  const selectedAddress = useSelector((state) => state.addresses.address);
  // const selectedAddressId = selectedAddress?.id;

  const handleOpen = () => {
    setOpen(true);
  };
  const [selectedAddressId, setSelectedAddressId] = useState(defaultAddressId);

  const handleClose = () => {
    setOpen(false);
    setSelectedAddressId(selectedAddress?.id || defaultAddressId);
  };
  const handleAddressClick = (id) => {
    setSelectedAddressId(id);
  };

  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (selectedAddressId) {
      dispatch(getAddressById(selectedAddressId));
    }
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);
  useEffect(() => {
    setSelectedAddressId(defaultAddressId);
  }, [defaultAddressId]);
  return (
    <>
      {loading === true ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress size={50} color="success" />
        </Box>
      ) : (
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
            <Typography sx={{ fontSize: { xs: '15px', lg: '20px' }, fontWeight: '700' }}>
              Thông tin nhận hàng
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ fontSize: { xs: '13px', lg: '15px' } }}>
              {selectedAddress
                ? `${selectedAddress.detail}, ${selectedAddress.wardName}, ${selectedAddress.districtName}, ${selectedAddress.provinceName}`
                : defaultAddress
                ? `${defaultAddress.detail}, ${defaultAddress.wardName}, ${defaultAddress.districtName}, ${defaultAddress.provinceName}`
                : 'Không có địa chỉ mặc định'}
            </Typography>
            <Button variant="outlined" onClick={handleOpen} sx={{ padding: '6px 3px', fontSize: '11px' }}>
              Thay đổi
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '70%', lg: '800px' },
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
                      <Radio checked={selectedAddressId === address.id} value={address.id} name="seletecd-address" />
                      <Typography>
                        {address.detail}, {address.wardName}, {address.districtName}, {address.provinceName}
                      </Typography>
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
      )}
    </>
  );
};

export default CheckoutInfor;
