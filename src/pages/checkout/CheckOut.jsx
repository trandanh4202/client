import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container } from '@mui/system';
import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import DoneIcon from '@mui/icons-material/Done';

const CheckOut = () => {
  const [open, setOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [checkedAddress, setCheckedAddress] = useState('Địa chỉ 1'); // Địa chỉ mặc định
  const [defaultAddress, setDefaultAddress] = useState('Địa chỉ 3'); // Địa chỉ mặc định
  const [active, setActive] = useState('VNPAY'); // Địa chỉ mặc định

  const addresses = ['Địa chỉ 1', 'Địa chỉ 2', 'Địa chỉ 3']; // Thay thế bằng danh sách địa chỉ của bạn
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAddress(defaultAddress);
  };

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
  const handlePayment = () => {
    if (active === 'Paypal') {
      console.log('Paypal');
    } else if (active === 'VNPAY') {
      console.log('VNPAY');
    } else {
      console.log('COD');
    }
  };
  return (
    <>
      <Container
        sx={{
          marginTop: '40px',
        }}
      >
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
        <Grid container sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <Grid item xs={12} md={8} lg={8} sx={{ padding: '10px' }}>
            <Paper sx={{ padding: '20px', border: '2px solid #ebebeb' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex' }}>
                  <Badge badgeContent={1} color="primary">
                    <Box
                      sx={{
                        width: '82px',
                        height: '82px',
                        border: '1px solid #f3f3f3',
                      }}
                    >
                      <img alt="1" src="./logo.png" style={{ width: '100%', height: 'auto', padding: '10px' }} />
                    </Box>
                  </Badge>

                  <Typography
                    sx={{
                      fontWeight: '700',
                      marginLeft: '20px',
                    }}
                  >
                    Iphone 14 Promax
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: '600',
                    }}
                  >
                    8.990.000đ
                  </Typography>
                  <Typography>x1</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex' }}>
                  <Badge badgeContent={1} color="primary">
                    <Box
                      sx={{
                        width: '82px',
                        height: '82px',
                        border: '1px solid #f3f3f3',
                      }}
                    >
                      <img alt="1" src="./logo.png" style={{ width: '100%', height: 'auto', padding: '10px' }} />
                    </Box>
                  </Badge>

                  <Typography
                    sx={{
                      fontWeight: '700',
                      marginLeft: '20px',
                    }}
                  >
                    Iphone 14 Promax
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: '600',
                    }}
                  >
                    8.990.000đ
                  </Typography>
                  <Typography>x1</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{ padding: '10px' }}>
            <Paper sx={{ padding: '10px' }}>
              <FlexBetween>
                <Typography
                  sx={{
                    fontWeight: '600',
                  }}
                >
                  Tiền sản phẩm:
                </Typography>
                <Typography>8.990.000đ</Typography>
              </FlexBetween>
              <Divider sx={{ margin: '20px' }} />
              <FlexBetween>
                <Typography
                  sx={{
                    fontWeight: '600',
                  }}
                >
                  Tiền vận chuyển:
                </Typography>
                <Typography>8.990.000đ</Typography>
              </FlexBetween>
              <Divider sx={{ margin: '20px' }} />
              {active === 'COD' ? (
                <>
                  <FlexBetween>
                    <Typography
                      sx={{
                        fontWeight: '600',
                      }}
                    >
                      Tiền thu hộ ( COD):
                    </Typography>
                    <Typography>8.990.000đ</Typography>
                  </FlexBetween>
                  <Divider sx={{ margin: '20px' }} />
                </>
              ) : (
                ''
              )}
              <FlexBetween>
                <Typography
                  sx={{
                    fontWeight: '700',
                    color: 'black',
                  }}
                >
                  Tổng tiền
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '700',
                    color: '#f61900',
                  }}
                >
                  8.990.000đ
                </Typography>
              </FlexBetween>
              <Divider sx={{ margin: '20px' }} />
              <Typography>- ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày</Typography>
              <Typography>- Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</Typography>
              <Grid container>
                <Grid
                  item
                  lg={6}
                  sx={{
                    padding: '5px',
                  }}
                >
                  <Box
                    sx={{
                      border: '1px solid rgb(224, 224, 224)',
                      '&.active-border': {
                        border: '1px solid rgb(20, 53, 195);',
                      },
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                    className={active === 'VNPAY' ? 'active-border' : ''}
                    onClick={() => setActive('VNPAY')}
                  >
                    {active === 'VNPAY' ? (
                      <>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '-1px',
                            right: '-1px',
                            width: '0px',
                            height: '0px',
                            borderStyle: 'solid',
                            borderWidth: '0px 30px 30px 0px',
                            borderColor: 'transparent rgb(20, 53, 195) transparent transparent',
                          }}
                        />
                        <DoneIcon
                          sx={{
                            display: 'flex',
                            position: 'absolute',
                            top: '-1px',
                            right: '-1px',
                            zIndex: '0',
                            color: 'white',
                            fontSize: '15px',
                          }}
                        />
                      </>
                    ) : (
                      ' '
                    )}
                    <Typography sx={{ fontSize: '15px', padding: '5px' }}>Thanh toán VNPAY</Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  sx={{
                    padding: '5px',
                  }}
                >
                  <Box
                    sx={{
                      border: '1px solid rgb(224, 224, 224)',
                      '&.active-border': {
                        border: '1px solid rgb(20, 53, 195);',
                      },
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                    className={active === 'Paypal' ? 'active-border' : ''}
                    onClick={() => setActive('Paypal')}
                  >
                    {active === 'Paypal' ? (
                      <>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '-1px',
                            right: '-1px',
                            width: '0px',
                            height: '0px',
                            borderStyle: 'solid',
                            borderWidth: '0px 30px 30px 0px',
                            borderColor: 'transparent rgb(20, 53, 195) transparent transparent',
                          }}
                        />
                        <DoneIcon
                          sx={{
                            display: 'flex',
                            position: 'absolute',
                            top: '-1px',
                            right: '-1px',
                            zIndex: '0',
                            color: 'white',
                            fontSize: '15px',
                          }}
                        />
                      </>
                    ) : (
                      ' '
                    )}
                    <Typography sx={{ fontSize: '15px', padding: '5px' }}>Thanh toán Paypal</Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={12}
                  sx={{
                    padding: '5px',
                  }}
                >
                  <Box
                    sx={{
                      border: '1px solid rgb(224, 224, 224)',
                      '&.active-border': {
                        border: '1px solid rgb(20, 53, 195);',
                      },
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                    className={active === 'COD' ? 'active-border' : ''}
                    onClick={() => setActive('COD')}
                  >
                    {active === 'COD' ? (
                      <>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '-1px',
                            right: '-1px',
                            width: '0px',
                            height: '0px',
                            borderStyle: 'solid',
                            borderWidth: '0px 30px 30px 0px',
                            borderColor: 'transparent rgb(20, 53, 195) transparent transparent',
                          }}
                        />
                        <DoneIcon
                          sx={{
                            display: 'flex',
                            position: 'absolute',
                            top: '-1px',
                            right: '-1px',
                            zIndex: '0',
                            color: 'white',
                            fontSize: '15px',
                          }}
                        />
                      </>
                    ) : (
                      ' '
                    )}
                    <Typography sx={{ fontSize: '15px', padding: '5px' }}>Thanh toán khi nhận hàng</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  backgroundColor: '#f61900',
                  padding: '10px',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#f61925',
                  },
                }}
                onClick={handlePayment}
              >
                Thanh Toán
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckOut;
