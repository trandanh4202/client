import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Token, Visibility, VisibilityOff } from '@mui/icons-material';
import { Divider, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import FlexBetween from '../flexbetween/FlexBetween';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, registerUser } from '~/features/auth/authSlice';
import { useSelect } from '@mui/base';

const validationSchema = Yup.object({
  name: Yup.string(),
  phone: Yup.string().matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số'),

  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: Yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp') // Kiểm tra xem confirmPassword có giống với password không
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

function AuthForm({ open, close }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { name, phone, email, password, confirmPassword } = values;
        if (authType) {
          await dispatch(registerUser({ name, phone, email, password, confirmPassword }));
          resetForm(); // Đặt lại form sau khi submit thành công
        } else {
          await dispatch(login({ email, password }));
          resetForm(); // Đặt lại form sau khi submit thành công
          window.location.reload();
        }
      } catch (error) {
        // Xử lý lỗi ở đây
      }
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [authType, setAuthType] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const dispatch = useDispatch();

  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '85%', md: '40%', lg: '40%' },
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '20px',
          p: 4,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          {authType && (
            <>
              <TextField
                fullWidth
                margin="normal"
                id="name"
                name="name"
                label="Tên"
                variant="outlined"
                {...formik.getFieldProps('name')}
              />
              <TextField
                fullWidth
                margin="normal"
                id="phone"
                name="phone"
                label="Số điện thoại"
                type="phone"
                variant="outlined"
                {...formik.getFieldProps('phone')}
              />
            </>
          )}
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            {...formik.getFieldProps('email')}
            sx={{
              margin: '5px 0',
              '& label': {
                top: '-5px',
              },
              '& input': {
                padding: '10px',
              },
            }}
          />
          {forgotPassword ? (
            ''
          ) : (
            <Box sx={{ position: 'relative' }}>
              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                {...formik.getFieldProps('password')}
                sx={{
                  margin: '5px 0',
                  '& label': {
                    top: '-5px',
                  },
                  '& input': {
                    padding: '10px',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
          {authType && (
            <TextField
              fullWidth
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              label="Xác nhận mật khẩu"
              type={showConfirmPassword ? 'text' : 'password'}
              variant="outlined"
              {...formik.getFieldProps('confirmPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleTogglePasswordVisibility('confirmPassword')}>
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          <Button color="primary" variant="contained" fullWidth type="submit">
            {authType ? (
              <Typography>Đăng ký </Typography>
            ) : forgotPassword ? (
              <Typography>Gửi yêu cầu</Typography>
            ) : (
              <Typography>Đăng nhập</Typography>
            )}
          </Button>
        </form>
        {authType && (
          <Typography
            sx={{ textAlign: 'end', color: 'blue', marginTop: '20px' }}
            onClick={() => setForgotPassword(true)}
          >
            Quên mật khẩu ?
          </Typography>
        )}

        <Divider sx={{ margin: '20px 0' }}>hoặc đăng nhập bằng</Divider>
        <Grid container>
          <Grid item xs={6} md={6} lg={6}>
            <Box
              sx={{
                overflow: 'hidden',
                backgroundColor: '#f4511e',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: '10px',
              }}
            >
              <img
                alt="logo google"
                src="./google.png"
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain',
                }}
              />
              <Typography sx={{ color: 'white' }}>Google</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Box
              sx={{
                overflow: 'hidden',
                backgroundColor: '#1178f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '10px',
              }}
            >
              <img
                alt="logo facebook"
                src="./facebook.png"
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain',
                }}
              />
              <Typography sx={{ color: 'white' }}>Facebook</Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: 'center', marginTop: '20px' }}>
          {authType ? 'Đã có tài khoản' : 'Chưa có tài khoản'}
          <Typography
            sx={{ color: 'blue', cuisor: 'pointer' }}
            onClick={() => {
              setAuthType(!authType);
              setForgotPassword(false);
            }}
          >
            {authType ? 'Đăng nhập ngay' : 'Đăng ký ngay'}
          </Typography>{' '}
        </Typography>
      </Box>
    </Modal>
  );
}

export default AuthForm;
