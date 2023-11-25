import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Token, Visibility, VisibilityOff } from '@mui/icons-material';
import { Divider, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, registerUser } from '~/features/auth/authSlice';
import { useSelect } from '@mui/base';
const validationSchema = Yup.object({
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: Yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
});
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values, dispatch),
  });
  const [showPassword, setShowPassword] = useState(false);
  const role = useSelector((state) => state.auth?.account?.role);
  const navigate = useNavigate();
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault(); // Sử dụng e.preventDefault() để ngăn chặn hành vi tự động reload trang web.
    const { email, password } = formik.values;

    await dispatch(login({ email, password }));
  }

  useEffect(() => {
    if (role?.[0] === 'Admin') {
      navigate('/admin/dashboard');
    }
  }, [role]);
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/Admin/bgAdmin/bgadmin.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundOrigin: 'content-box',
        }}
      >
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
          <form onSubmit={handleSubmit}>
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
            <Button color="primary" variant="contained" fullWidth type="submit">
              <Typography>Đăng nhập</Typography>
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
