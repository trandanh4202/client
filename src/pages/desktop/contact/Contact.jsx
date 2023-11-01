import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng nhập tên'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số')
    .required('Vui lòng nhập số điện thoại'),

  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
});
const Contact = () => {
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
      //   onClose();
    },
  });
  return (
    <Container sx={{ marginTop: '40px', padding: '0 4px 56px 4px' }}>
      <Grid container>
        <Grid item xs={12} lg={3}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon fontSize="large" sx={{ color: '#1435c3' }} />
            <Typography sx={{ color: '#1435c3' }}>Thời gian: 8H00 - 21H00</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <LocationOnIcon fontSize="large" sx={{ color: '#1435c3' }} />
            <Typography sx={{ color: '#1435c3' }}>Địa chỉ: 144 Tô Ký, Thới Tam Thôn, Hóc Môn, Tp. HCM</Typography>
          </Box>
          <form onSubmit={formik.handleSubmit}>
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
            <TextField
              fullWidth
              margin="normal"
              id="phone"
              name="phone"
              label="Phone"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
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

            <Button variant="contained" fullWidth type="submit" sx={{ backgroundColor: '#1435c3' }}>
              Gửi thông tin
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} lg={9} sx={{ padding: '10px' }}>
          <iframe
            alt="1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1725159359726!2d106.60964847410602!3d10.874479857379352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a0ebd37c0e9%3A0x80a9d948075d56f1!2zMTQyIFTDtCBLw70sIFRydW5nIE3hu7kgVMOieSwgSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1696212432844!5m2!1svi!2s"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
