import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper, Typography } from '@mui/material';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import { DatePicker } from '@mui/x-date-pickers';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, putProfile } from '~/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Họ và tên không được bỏ trống'),
  // birthDay: Yup.date().required('Ngày sinh không được bỏ trống'),
  phone: Yup.string().required('Số điện thoại không được bỏ trống'),
  currentPassword: Yup.string().required('Mật khẩu hiện tại không được bỏ trống'),
  newPassword: Yup.string().required('Mật khẩu mới không được bỏ trống'),
  confirmNewPassword: Yup.string()
    .required('Xác nhận mật khẩu mới không được bỏ trống')
    .oneOf([Yup.ref('newPassword'), null], 'Xác nhận mật khẩu mới phải trùng khớp với mật khẩu mới'),
});
const Setting = () => {
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.auth);
  const { profile, message, loading } = profileInfo;
  const [mess, setMess] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const handleUpdateProfile = async (profileData, { setValues }) => {
    await dispatch(putProfile(profileData));

    // Reset values to empty after successful submission
    setValues({
      name: '',
      phone: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });

    toast.success('Thay đổi thành công', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />{' '}
      <Paper sx={{ padding: { xs: '5px', lg: '20px' } }}>
        <Typography sx={{ fontSize: { xs: '15px', lg: '20px' }, fontWeight: '600', marginBottom: '10px' }}>
          Thông tin tài khoản
        </Typography>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setValues }) => {
            // Call the handleUpdateProfile function with values and setValues
            handleUpdateProfile(values, { setValues });
          }}
        >
          {({ errors, touched, values, setFieldValue, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} sx={{ padding: '10px' }}>
              <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      maxWidth: '40%',
                      flex: '0 0 40%',
                      marginRight: '20px',
                      textAlign: { xs: 'left', lg: 'right' },
                      fontSize: { xs: '13px', lg: '20px' },
                    }}
                  >
                    Họ và Tên
                  </Typography>
                  <Field
                    as={OutlinedInput}
                    id="name"
                    name="name"
                    placeholder={profile.name}
                    value={values.name}
                    onChange={handleChange}
                  />
                </Box>
                <ErrorMessage name="name" component="div" style={{ color: 'red', textAlign: 'center' }} />
              </FormControl>
              <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      maxWidth: '40%',
                      flex: '0 0 40%',
                      marginRight: '20px',
                      textAlign: { xs: 'left', lg: 'right' },
                      fontSize: { xs: '13px', lg: '20px' },
                    }}
                  >
                    Số điện thoại
                  </Typography>
                  <Field
                    as={OutlinedInput}
                    id="phone"
                    name="phone"
                    placeholder={profile.phoneNumber}
                    value={values.phone}
                    onChange={handleChange}
                  />
                </Box>
                <ErrorMessage name="phone" component="div" style={{ color: 'red', textAlign: 'center' }} />
              </FormControl>
              <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      maxWidth: '40%',
                      flex: '0 0 40%',
                      marginRight: '20px',
                      textAlign: { xs: 'left', lg: 'right' },
                      fontSize: { xs: '13px', lg: '20px' },
                    }}
                  >
                    Email
                  </Typography>
                  <Field
                    as={OutlinedInput}
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={profile.email}
                    readOnly
                  />
                </Box>
              </FormControl>

              <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      maxWidth: '40%',
                      flex: '0 0 40%',
                      marginRight: '20px',
                      textAlign: { xs: 'left', lg: 'right' },
                      fontSize: { xs: '13px', lg: '20px' },
                    }}
                  >
                    Mật khẩu hiện tại
                  </Typography>
                  <Field
                    as={OutlinedInput}
                    id="currentPassword"
                    name="currentPassword"
                    placeholder="Mật khẩu hiện tại"
                    value={values.currentPassword}
                    onChange={handleChange}
                  />
                </Box>
                <ErrorMessage name="currentPassword" component="div" style={{ color: 'red', textAlign: 'center' }} />
              </FormControl>
              {/* Repeat the above structure for other fields (birthDay, phone, currentPassword, newPassword, confirmNewPassword) */}

              <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      maxWidth: '40%',
                      flex: '0 0 40%',
                      marginRight: '20px',
                      textAlign: { xs: 'left', lg: 'right' },
                      fontSize: { xs: '13px', lg: '20px' },
                    }}
                  >
                    Mật khẩu mới
                  </Typography>
                  <Field
                    as={OutlinedInput}
                    id="newPassword"
                    name="newPassword"
                    placeholder="Mật khẩu mới"
                    value={values.newPassword}
                    onChange={handleChange}
                  />
                </Box>
                <ErrorMessage name="newPassword" component="div" style={{ color: 'red', textAlign: 'center' }} />
              </FormControl>
              <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      maxWidth: '40%',
                      flex: '0 0 40%',
                      marginRight: '20px',
                      textAlign: { xs: 'left', lg: 'right' },
                      fontSize: { xs: '13px', lg: '20px' },
                    }}
                  >
                    Xác nhận mật khẩu mới
                  </Typography>
                  <Field
                    as={OutlinedInput}
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    placeholder="Xác nhận mật khẩu mới"
                    value={values.confirmNewPassword}
                    onChange={handleChange}
                  />
                </Box>
                <ErrorMessage name="confirmNewPassword" component="div" style={{ color: 'red', textAlign: 'center' }} />
              </FormControl>

              <Box mt={2} sx={{ textAlign: 'center', width: '80%' }}>
                <Button type="submit" variant="contained" color="primary">
                  Cập nhật
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export default Setting;
