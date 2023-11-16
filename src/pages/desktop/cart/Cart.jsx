import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addListItem, deleteCartItems, getCartItems, updateCartItems } from '~/features/cartItems/cartItemsSlice';

export const formatStringToMoney = (str) => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return (isNaN(parseFloat(result)) ? '0 ' : result) + 'đ';
};
const Cart = () => {
  window.scrollTo(0, 0);

  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const selectedItems = useSelector((state) => state.cartItems.listItem);
  const totalValue = selectedItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  console.log(selectedItems);
  const handleCheckboxChange = (item) => {
    const selectedItemIds = selectedItems.map((selectedItem) => selectedItem.productId);

    // Kiểm tra xem item đã tồn tại trong danh sách được chọn chưa
    const index = selectedItemIds.indexOf(item.productId);
    console.log(index);
    console.log(item);
    if (index !== -1) {
      dispatch(addListItem(selectedItems.filter((id) => id.productId !== item.productId)));
      console.log(selectedItems.filter((id) => id !== item));
    } else {
      dispatch(addListItem([...selectedItems, item]));
    }
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked && selectedItems) {
      const allProductIds = cartItems.map((item) => item);
      dispatch(addListItem(allProductIds));
    } else {
      dispatch(addListItem([]));
    }
  };

  const deleteItem = (item) => {
    dispatch(deleteCartItems(item));
  };
  const updateItem = (productId, quantity) => {
    dispatch(updateCartItems({ productId, quantity }));
    const selectedItemIndex = selectedItems.findIndex((item) => item.productId === productId);

    if (selectedItemIndex !== -1) {
      const updatedSelectedItems = selectedItems.map((item, index) => {
        if (index === selectedItemIndex) {
          return { ...item, quantity }; // Tạo một bản sao mới của item và cập nhật quantity
        }
        return item;
      });
      dispatch(addListItem(updatedSelectedItems)); // Thay thế `updateSelectedItems` bằng action của bạn để cập nhật selectedItems
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <>
      <Container sx={{ marginTop: '40px', marginBottom: '40px', display: { xs: 'none', md: 'block', lg: 'block' } }}>
        <TableContainer component={Paper} sx={{ padding: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: '0' }}>
                  <Checkbox
                    checked={selectedItems?.length > 0 && selectedItems?.length === cartItems?.length}
                    onChange={handleSelectAllChange}
                  />
                </TableCell>
                <TableCell sx={{ width: '40%', fontSize: '20px', fontWeight: '700', padding: '0' }}>
                  Hình ảnh và Tên sản phẩm
                </TableCell>
                <TableCell
                  sx={{ width: '15%', textAlign: 'center', fontSize: '20px', fontWeight: '700', padding: '0' }}
                >
                  Giá sản phẩm
                </TableCell>
                <TableCell
                  sx={{ width: '25%', textAlign: 'center', fontSize: '20px', fontWeight: '700', padding: '0' }}
                >
                  Số lượng
                </TableCell>
                <TableCell
                  sx={{ width: '10%', textAlign: 'center', fontSize: '20px', fontWeight: '700', padding: '0' }}
                >
                  Tổng
                </TableCell>
                <TableCell
                  sx={{
                    width: '10%',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: '700',
                    padding: '0',
                  }}
                >
                  Thao tác
                </TableCell>
              </TableRow>
            </TableHead>
            {cartItems?.length > 0 ? (
              <TableBody>
                {cartItems?.map((item) => (
                  <TableRow key={item.productId}>
                    <TableCell sx={{ padding: '0' }}>
                      <Checkbox
                        checked={selectedItems.some((selectedItem) => selectedItem.productId === item.productId)}
                        onChange={() => handleCheckboxChange(item)}
                      />
                    </TableCell>
                    <TableCell sx={{ width: '40%', padding: '0' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          //   justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <img
                          alt="1"
                          src={item.product.imageUrl}
                          width="40%"
                          style={{
                            margin: ' 10px',
                          }}
                        />
                        <Typography sx={{ fontSize: '15px', fontWeight: '700' }}> {item.product.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ width: '15%', textAlign: 'center', fontSize: '15px', fontWeight: '600', padding: '0' }}
                    >
                      {formatStringToMoney(item.product.price)}
                    </TableCell>
                    <TableCell sx={{ width: '25%', padding: '0' }}>
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
                          onClick={() => updateItem(item.productId, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <TextField
                          //   type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.productId, parseInt(e.target.value, 10))}
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
                          onClick={() => updateItem(item.productId, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ width: '10%', textAlign: 'center', fontWeight: '600', padding: '0' }}>
                      {formatStringToMoney(item.product.price * item.quantity)}
                    </TableCell>
                    <TableCell sx={{ width: '10%', textAlign: 'center', padding: '0' }}>
                      <IconButton onClick={() => deleteItem(item.productId)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3}>Tổng tiền chưa bao gồm các loại phí khác</TableCell>
                  <TableCell colSpan={1} sx={{ textAlign: 'right', fontWeight: '600', fontSize: '20px' }}>
                    Tổng tiền:
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    sx={{ textAlign: 'center', fontWeight: '600', fontSize: '20px', padding: '0px' }}
                  >
                    {formatStringToMoney(totalValue)}
                  </TableCell>
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
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: '40%', fontSize: '20px', fontWeight: '600' }}
            component={Link}
            to="/"
          >
            Tiếp tục mua sắm
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '40%', fontSize: '20px', fontWeight: '600' }}
            component={Link}
            to="/Checkout"
          >
            Thanh toán
          </Button>
        </Box>
      </Container>
      <Container sx={{ display: { xs: 'block', md: 'none', lg: 'none' }, margin: '40px 0', padding: '0 4px 40px 4px' }}>
        <Box>
          <Paper sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Checkbox
              checked={selectedItems?.length > 0 && selectedItems?.length === cartItems?.length}
              onChange={handleSelectAllChange}
            />
            <Typography>Chọn tất cả</Typography>
          </Paper>
          <Paper>
            {cartItems?.map((item) => (
              <Box sx={{ marginBottom: '20px', display: 'flex' }}>
                <Checkbox
                  checked={selectedItems.some((selectedItem) => selectedItem.productId === item.productId)}
                  onChange={() => handleCheckboxChange(item)}
                />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      border: '1px solid #f3f3f3',
                    }}
                  >
                    <img
                      alt={item.product.name}
                      src={item.product.imageUrl}
                      style={{ width: '82px', height: '82px', objectFit: 'contain' }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    marginLeft: '10px',
                  }}
                >
                  <FlexBetween>
                    <Typography
                      sx={{
                        fontWeight: '700',
                      }}
                    >
                      {item.product.name}
                    </Typography>
                    <Box>
                      <IconButton onClick={() => deleteItem(item.productId)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Box>
                  </FlexBetween>
                  <Typography
                    sx={{
                      fontWeight: '600',
                    }}
                  >
                    {item.quantity * item.product.price}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        outline: 'none',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1)',
                        border: '1px solid rgba(0, 0, 0, 0.09)',
                        borderRadius: '2px',
                        background: 'transparent',
                        color: 'rgba(0, 0, 0, 0.8)',
                        width: '15px',
                        height: '15px',
                        padding: '2px',
                        minWidth: '0',
                      }}
                      onClick={() => updateItem(item.productId, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <TextField
                      //   type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.productId, parseInt(e.target.value, 10))}
                      sx={{ margin: '0 10px', padding: '0', width: '20%', textAlign: 'center' }}
                      inputProps={{ style: { padding: 0, textAlign: 'center' } }}
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        outline: 'none',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1)',
                        border: '1px solid rgba(0, 0, 0, 0.09)',
                        borderRadius: '2px',
                        background: 'transparent',
                        color: 'rgba(0, 0, 0, 0.8)',
                        width: '15px',
                        height: '15px',
                        padding: '2px',
                        minWidth: '0',
                      }}
                      onClick={() => updateItem(item.productId, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Paper>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              padding: '10px',
              alignItems: 'center',
              borderTop: '1px solid rgb(221, 221, 221)',
              position: 'fixed',
              bottom: '0px',
              left: '0px',
              right: '0px',
              backgroundColor: 'rgb(255, 255, 255)',
              justifyContent: 'space-between',
              zIndex: '1051',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography
                sx={{
                  color: 'rgb(18, 48, 176)',
                  fontWeight: '700',
                  fontSize: '20px',
                }}
              >
                {formatStringToMoney(totalValue)}
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Button
                component={Link}
                to="/checkout"
                sx={{
                  position: 'relative',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'inline-flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'rgb(255, 255, 255)',
                  background: 'rgb(20, 53, 195)',
                  height: '40px',
                  fontSize: '15px',
                  padding: ' 0px 8px',
                  marginTop: '10px',
                  marginBottom: '10px',
                  width: '100%',
                  fontWeight: '500',
                }}
              >
                Tiếp tục
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: '10px',
            marginTop: '20px',
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
            flexDirection: 'column',
            display: { xs: 'none', lg: 'flex' },
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: '100%', fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}
            component={Link}
            to="/store"
          >
            Tiếp tục mua sắm
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', fontSize: '18px', fontWeight: '600' }}
            component={Link}
            to="/Checkout"
          >
            Thanh toán
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
