import React from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper, Typography } from '@mui/material';
import FlexBetween from '~/components/flexbetween/FlexBetween';

const Setting = () => {
  // Định nghĩa schema validation bằng Yup
  const validationSchema = yup.object({
    fullName: yup.string().required('Họ và tên không được để trống'),
    phoneNumber: yup.string().required('SĐT không được để trống'),
    email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  });

  // Sử dụng useFormik để quản lý form

  return (
    <Paper sx={{ padding: '20px' }}>
      <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>Thông tin tài khoản</Typography>
      <Formik
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: '',
          dateOfBirth: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Xử lý logic khi nhấn nút Cập nhật
          console.log(values);
        }}
      >
        {({ error, touched, values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} sx={{ padding: '10px' }}>
            <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ maxWidth: '25%', flex: '0 0 25%', textAlign: 'right' }}>Họ và Tên</Typography>
                <OutlinedInput
                  id="fullName"
                  name="fullName"
                  placeholder="Họ và tên"
                  value={values.fullName}
                  onChange={handleChange}
                  error={touched.fullName && Boolean(error.fullName)}
                  sx={{
                    marginLeft: '20px',
                    '& input': {
                      padding: '5px 10px',
                    },
                  }}
                />
              </Box>
            </FormControl>
            <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ flex: '0 0 25%', maxWidth: '25%', textAlign: 'right' }}>Số điện thoại</Typography>

                <OutlinedInput
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="SĐT"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  error={touched.phoneNumber && Boolean(error.phoneNumber)}
                  sx={{
                    marginLeft: '20px',
                    '& input': {
                      padding: '5px 10px',
                    },
                  }}
                />
              </Box>
            </FormControl>
            <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ maxWidth: '25%', textAlign: 'right', flex: '0 0 25%' }}>Email</Typography>

                <OutlinedInput
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(error.email)}
                  sx={{
                    marginLeft: '20px',
                    '& input': {
                      padding: '5px 10px',
                    },
                  }}
                />
              </Box>
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
  );
};

export default Setting;
