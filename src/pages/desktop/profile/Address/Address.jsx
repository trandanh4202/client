import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import AddIcon from '@mui/icons-material/Add';
import AddressModal from './ButtonModal/AddressModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddresses, getAddresses } from '~/features/address/addressSlice';
import { getProvince } from '~/features/GHN/ghnSlice';
const Address = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('add');
  const [id, setId] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState({
    provinceName: '',
    provinceId: 0,
    districtName: '',
    districtId: 0,
    wardName: '',
    wardCode: '',
    detail: '',
  });
  const handleAddModal = () => {
    setAction('add');
    dispatch(getProvince());
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditModal = (id) => {
    dispatch(getProvince());

    setAction('edit');
    setId(id);
    setOpen(true);
  };

  const addresses = useSelector((state) => state.addresses.addresses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  return (
    <>
      <Button
        startIcon={<AddIcon />}
        sx={{
          backgroundColor: 'white',
          width: '100%',
          marginBottom: '20px',
          padding: '10px',
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.3)',
          },
        }}
        disableRipple
        onClick={handleAddModal}
      >
        Thêm địa chỉ
      </Button>
      <AddressModal open={open} close={handleClose} action={action} id={id} />
      <Paper sx={{ padding: '5px 15px' }}>
        <Box sx={{ margin: '20px 0' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {addresses.map((address) => (
              <>
                <FlexBetween sx={{ gap: '20px', margin: '20px 0' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '13px' }}>
                      <Typography sx={{ marginRight: '10px', fontSize: '18px', fontWeight: '700' }}>
                        Trần Trọng Danh
                      </Typography>
                      <Typography
                        variant="span"
                        sx={{
                          padding: '5px',
                          borderRadius: '0.25rem',
                          border: 'unset',
                          backgroundColor: 'rgb(243, 245, 252)',
                          color: 'rgb(18, 48, 176)',
                          fontWeight: '500',
                        }}
                      >
                        {' '}
                        Mặc định
                      </Typography>{' '}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '13px' }}>
                        Địa chỉ: {address.detail} , {address.wardName} , {address.districtName} , {address.provinceName}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '13px' }}>Điện thoại: 0913423421</Typography>
                    </Box>{' '}
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ padding: { xs: '5px 10px', lg: '5px 35px' } }}
                      onClick={() => handleEditModal(address.id)}
                    >
                      Chỉnh sửa
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        padding: { xs: '5px 10px', lg: '5px 35px' },
                        border: '1px solid rgb(218, 67, 67)',
                        color: 'rgb(218, 67, 67)',
                      }}
                      onClick={() => dispatch(deleteAddresses(address.id))}
                    >
                      Xoá
                    </Button>
                  </Box>
                </FlexBetween>
              </>
            ))}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Address;
