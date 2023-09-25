import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Divider, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import FlexBetween from '../flexbetween/FlexBetween';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng nhập tên'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số')
    .required('Vui lòng nhập số điện thoại'),

  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: Yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp') // Kiểm tra xem confirmPassword có giống với password không
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Vui lòng nhập mật khẩu xác nhận'),
});

function AuthForm({ isOpen, onClose }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onClose();
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [authType, setAuthType] = useState(true);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
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
          {authType ? (
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="Tên"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
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
          ) : (
            ' '
          )}
          {/* <TextField
            fullWidth
            margin="normal"
            id="phone"
            name="phone"
            label="Số điện thoại"
            type="phone"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            sx={{
              margin: '5px 0',
            }}
          /> */}

          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
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
          {authType ? (
            <TextField
              fullWidth
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              label="Xác nhận mật khẩu"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                      {showConfirmPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            ''
          )}
          <Button color="primary" variant="contained" fullWidth type="submit">
            {authType ? 'Đăng ký' : forgotPassword ? 'Gửi yêu cầu' : 'Đăng nhập'}{' '}
          </Button>
        </form>
        {authType ? (
          ''
        ) : (
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
