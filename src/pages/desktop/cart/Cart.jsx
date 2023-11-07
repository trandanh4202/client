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
import { deleteCartItems, getCartItems, updateCartItems } from '~/features/cartItems/cartItemsSlice';
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const [selectedItems, setSelectedItems] = useState([]);
  const totalValue = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

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

  const deleteItem = (item) => {
    dispatch(deleteCartItems(item));
  };
  const updateItem = (productId, quantity) => {
    dispatch(updateCartItems({ productId, quantity }));
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
                        checked={selectedItems?.includes(item.productId)}
                        onChange={() => handleCheckboxChange(item.productId)}
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
                      {item.product.price}
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
                      {item.product.price * item.quantity}
                    </TableCell>
                    <TableCell sx={{ width: '10%', textAlign: 'center', padding: '0' }}>
                      <IconButton onClick={() => deleteItem(item.productId)}>
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
                  checked={selectedItems.includes(item.productId)}
                  onChange={() => handleCheckboxChange(item.productId)}
                />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      border: '1px solid #f3f3f3',
                    }}
                  >
                    <img alt="1" src="./logo.png" style={{ width: '82px', height: '82px' }} />
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
                      Iphone 14 Promax
                    </Typography>
                    <Box>
                      <IconButton>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Box>
                  </FlexBetween>
                  <Typography
                    sx={{
                      fontWeight: '600',
                    }}
                  >
                    8.990.000đ
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
                      // onClick={() => handleQtyChange(item.productId, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <TextField
                      //   type="number"
                      value={item.quantity}
                      // onChange={(e) => handleQtyChange(item.productId, parseInt(e.target.value, 10))}
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
                      // onClick={() => handleQtyChange(item.productId, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Paper>
        </Box>
        <Box
          sx={{
            padding: '10px',
            marginTop: '20px',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
            flexDirection: 'column',
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
