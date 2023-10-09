import { Button, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Họ tên không được để trống'),
  phoneNumber: Yup.string().required('Số điện thoại không được để trống'),
  email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  dateOfBirth: Yup.date().required('Ngày tháng năm sinh không được để trống'),
});
const Setting = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      dateOfBirth: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Xử lý việc gửi thông tin người dùng sau khi submit
      console.log(values);
    },
  });
  return (
    <>
      <Paper>
        <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>Thông tin tài khoản</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Họ và tên"
            variant="outlined"
            fullWidth
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />

          <TextField
            label="Số điện thoại"
            variant="outlined"
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            label="Ngày tháng năm sinh"
            variant="outlined"
            fullWidth
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
          />

          <Button type="submit" variant="contained" color="primary">
            Cập nhật
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Setting;
