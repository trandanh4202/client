import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Cart = () => {
  const initialCartItems = [
    { id: 1, name: 'Sản phẩm A', price: 10, quantity: 2 },
    { id: 2, name: 'Sản phẩm B', price: 15, quantity: 1 },
    { id: 3, name: 'Sản phẩm C', price: 20, quantity: 3 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const [selectedItems, setSelectedItems] = useState([]);
  const totalValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked && selectedItems) {
      const allProductIds = cartItems.map((item) => item.id);
      setSelectedItems(allProductIds);
    } else {
      setSelectedItems([]);
    }
  };
  const handleQtyChange = (itemId, newQty) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: Math.min(Math.max(newQty, 1), item.quantity),
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };
  const deleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

    // Cập nhật danh sách sản phẩm trong giỏ hàng
    setCartItems(updatedCartItems);
  };
  return (
    <>
      <Container sx={{ marginTop: '40px', marginBottom: '40px', display: { xs: 'none', md: 'block', lg: 'block' } }}>
        <TableContainer component={Paper} sx={{ padding: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    checked={selectedItems.length > 0 && selectedItems.length === cartItems.length}
                    onChange={handleSelectAllChange}
                  />
                </TableCell>
                <TableCell sx={{ width: '40%' }}>Hình ảnh và Tên sản phẩm</TableCell>
                <TableCell sx={{ width: '15%', textAlign: 'center' }}>Giá sản phẩm</TableCell>
                <TableCell sx={{ width: '25%', textAlign: 'center' }}>Số lượng</TableCell>
                <TableCell sx={{ width: '10%', textAlign: 'center' }}>Tổng</TableCell>
                <TableCell sx={{ width: '10%', textAlign: 'center' }}>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            {cartItems.length > 0 ? (
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </TableCell>
                    <TableCell sx={{ width: '40%' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          //   justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <img alt="1" src="./logo.png" width="40%" />

                        {item.name}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ width: '15%', textAlign: 'center' }}>{item.price}</TableCell>
                    <TableCell sx={{ width: '25%' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{
                            outline: 'none',
                            cursor: 'pointer',
                            fontSize: '20px',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1)',
                            border: '1px solid rgba(0, 0, 0, 0.09)',
                            borderRadius: '2px',
                            background: 'transparent',
                            color: 'rgba(0, 0, 0, 0.8)',
                            width: '50px',
                            height: '25px',
                            padding: '0',
                            minWidth: '0',
                          }}
                          onClick={() => handleQtyChange(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <TextField
                          //   type="number"
                          value={item.quantity}
                          onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value, 10))}
                          sx={{ margin: '0 10px', padding: '0', width: '20%', textAlign: 'center' }}
                        />
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{
                            outline: 'none',
                            cursor: 'pointer',
                            fontSize: '20px',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1)',
                            border: '1px solid rgba(0, 0, 0, 0.09)',
                            borderRadius: '2px',
                            background: 'transparent',
                            color: 'rgba(0, 0, 0, 0.8)',
                            width: '50px',
                            height: '25px',
                            padding: '0',
                            minWidth: '0',
                          }}
                          onClick={() => handleQtyChange(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ width: '10%', textAlign: 'center' }}>{item.price * item.quantity}</TableCell>
                    <TableCell sx={{ width: '10%', textAlign: 'center' }}>
                      <IconButton onClick={() => deleteItem(item.id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2}>Tổng tiền chưa bao gồm các loại phí khác</TableCell>

                  <TableCell colSpan={2} sx={{ textAlign: 'right', fontWeight: '600', fontSize: '20px' }}>
                    Tổng tiền:
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center', fontWeight: '600', fontSize: '20px' }}>{totalValue}</TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6}>
                    <Typography variant="body1" sx={{ textAlign: 'center', padding: '20px' }}>
                      Giỏ hàng của bạn còn trống, bạn có thể tiếp tục mua sắm.
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <Box
          sx={{
            padding: '10px',
            marginTop: '20px',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Button variant="outlined" color="primary" sx={{ width: '40%' }}>
            Tiếp tục mua sắm
          </Button>
          <Button variant="contained" color="primary" sx={{ width: '40%' }}>
            Thanh toán
          </Button>
        </Box>
      </Container>
      <Container sx={{ marginTop: '40px', marginBottom: '40px', display: { sx: 'block', md: 'none', lg: 'none' } }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: '0' }}>
                  <Checkbox
                    checked={selectedItems.length > 0 && selectedItems.length === cartItems.length}
                    onChange={handleSelectAllChange}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  {/* <TableCell sx={{ padding: '0' }}>
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </TableCell> */}
                  <TableCell
                    sx={{
                      display: 'flex',
                      //   justifyContent: 'center',
                      alignItems: 'center',
                      padding: '5px',
                    }}
                  >
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <Box
                      sx={{
                        width: '82px',
                        height: '82px',
                        marginRight: '10px',
                      }}
                    >
                      <img alt="1" src="./logo.png" style={{ width: '100%', height: 'auto' }} />
                    </Box>
                    <Box>
                      <FlexBetween
                        sx={{
                          alignItems: 'start',
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: '16px',
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '12px',
                            }}
                          >
                            Chỉ còn 1 sản phẩm Mua ngay kẻo lỡ
                          </Typography>
                        </Box>
                        <IconButton onClick={() => deleteItem(item.id)}>
                          <DeleteForeverIcon />
                        </IconButton>
                      </FlexBetween>
                      <FlexBetween>
                        <Typography sx={{ width: '70%' }}>{item.price}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                              outline: 'none',
                              cursor: 'pointer',
                              fontSize: '20px',
                              fontWeight: '500',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1)',
                              border: '1px solid rgba(0, 0, 0, 0.09)',
                              borderRadius: '2px',
                              background: 'transparent',
                              color: 'rgba(0, 0, 0, 0.8)',
                              width: '25px',
                              height: '25px',
                              padding: '0',
                              minWidth: '0',
                            }}
                            onClick={() => handleQtyChange(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <TextField
                            //   type="number"
                            value={item.quantity}
                            onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value, 10))}
                            sx={{
                              margin: '0 10px',
                              padding: '0',
                              width: '20%',
                              textAlign: 'center',
                              '& input': {
                                padding: '0', // Đặt padding cho thẻ input
                                textAlign: 'center',
                              },
                            }}
                          />
                          <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                              outline: 'none',
                              cursor: 'pointer',
                              fontSize: '20px',
                              fontWeight: '500',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1)',
                              border: '1px solid rgba(0, 0, 0, 0.09)',
                              borderRadius: '2px',
                              background: 'transparent',
                              color: 'rgba(0, 0, 0, 0.8)',
                              width: '25px',
                              height: '25px',
                              padding: '0',
                              minWidth: '0',
                            }}
                            onClick={() => handleQtyChange(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </Box>
                      </FlexBetween>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <FlexBetween
        sx={{
          backgroundColor: 'white',
          position: 'fixed',
          bottom: '56px',
          left: '0px',
          right: '0px',
          padding: '10px',
        }}
      >
        <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'rgb(18, 48, 176)' }}>18.990.000đ</Typography>
        <Button
          variant="contained"
          sx={{
            width: '50%',
            backgroundColor: 'rgb(18, 48, 176)',
          }}
        >
          Tiếp tục
        </Button>
      </FlexBetween>
    </>
  );
};

export default Cart;
