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
                <Box
                  sx={{
                    gap: { xs: '0px', lg: '20px' },
                    margin: '20px 0',
                    display: { xs: 'block', lg: 'flex' },
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: { xs: '100%', lg: '70%' },
                      marginBottom: { xs: '20px', lg: '0xp' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: { xs: '15px', lg: '18px' }, fontWeight: '700' }}>
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
                          fontSize: { xs: '15px', lg: '18px' },
                        }}
                      >
                        {address.isDefault ? 'Mặc định' : ''}
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
                      flexDirection: { xs: 'row', lg: 'column' },
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
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Address;
