import React from 'react';
import {
  Button,
  Modal,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  TextField,
  Paper,
  Typography,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import FlexBetween from '~/components/flexbetween/FlexBetween';

const validationSchema = Yup.object().shape({
  province: Yup.string().required('Tỉnh là trường bắt buộc'),
  district: Yup.string().required('Huyện là trường bắt buộc'),
  ward: Yup.string().required('Phường là trường bắt buộc'),
  detail: Yup.string().required('Chi tiết địa chỉ là trường bắt buộc'),
  isDefault: Yup.boolean(),
});

const provinces = ['Tỉnh 1', 'Tỉnh 2', 'Tỉnh 3'];
const districts = ['Huyện 1', 'Huyện 2', 'Huyện 3'];
const wards = ['Phường 1', 'Phường 2', 'Phường 3'];

function AddressModal({ open, close, action }) {
  const handleSubmit = () => {
    if (action === 'add') {
      console.log('add');
    } else {
      console.log('edit');
    }
  };
  return (
    <Modal open={open} onClose={close}>
      <Paper
        elevation={4}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '390px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px' }}>
          {action === 'add' ? 'Thêm đại chỉ' : 'Cập nhật địa chỉ'}
        </Typography>
        <Formik
          initialValues={{
            province: '',
            district: '',
            ward: '',
            detail: '',
            isDefault: false,
          }}
          validationSchema={validationSchema}
          // onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, setFieldValue }) => (
            <Form>
              <FlexBetween sx={{ flex: '0 0 40%' }}>
                <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
                  <InputLabel htmlFor="province">Tỉnh</InputLabel>
                  <Select
                    id="province"
                    name="province"
                    variant="outlined"
                    label="Tỉnh"
                    value={values.province}
                    onChange={(event) => {
                      setFieldValue('province', event.target.value);
                      setFieldValue('district', ''); // Reset district when province changes
                      setFieldValue('ward', ''); // Reset ward when province changes
                    }}
                    error={touched.province && errors.province ? true : false}
                  >
                    <MenuItem value="" disabled>
                      Chọn tỉnh
                    </MenuItem>
                    {provinces.map((province) => (
                      <MenuItem key={province} value={province}>
                        {province}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
                  <InputLabel htmlFor="district">Huyện</InputLabel>
                  <Select
                    id="district"
                    name="district"
                    variant="outlined"
                    label="Huyện"
                    value={values.district}
                    onChange={(event) => {
                      setFieldValue('district', event.target.value);
                      setFieldValue('ward', ''); // Reset ward when district changes
                    }}
                    error={touched.district && errors.district ? true : false}
                  >
                    <MenuItem value="" disabled>
                      Chọn huyện
                    </MenuItem>
                    {districts.map((district) => (
                      <MenuItem key={district} value={district}>
                        {district}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FlexBetween>
              <FlexBetween>
                <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
                  <InputLabel htmlFor="ward">Phường</InputLabel>
                  <Select
                    id="ward"
                    name="ward"
                    variant="outlined"
                    label="Phường"
                    value={values.ward}
                    onChange={(event) => {
                      setFieldValue('ward', event.target.value);
                    }}
                    error={touched.ward && errors.ward ? true : false}
                  >
                    <MenuItem value="" disabled>
                      Chọn phường
                    </MenuItem>
                    {wards.map((ward) => (
                      <MenuItem key={ward} value={ward}>
                        {ward}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
                  <TextField
                    variant="outlined"
                    label="Chi tiết địa chỉ"
                    name="detail"
                    value={values.detail}
                    onChange={handleChange}
                    error={touched.detail && errors.detail ? true : false}
                  />
                </FormControl>
              </FlexBetween>
              <FlexBetween>
                <FormControlLabel
                  control={<Field as={Checkbox} type="checkbox" name="isDefault" />}
                  label="Làm địa chỉ mặc định"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: '16px' }}
                  onClick={handleSubmit}
                >
                  Lưu
                </Button>
              </FlexBetween>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  );
}

export default AddressModal;
