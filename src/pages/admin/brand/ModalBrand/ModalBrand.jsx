import { Backdrop, Box, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBrand, putBrand } from '~/features/brands/brandsSlice';
const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng nhập tên loại'),
  description: Yup.string().required('Vui lòng nhập miêu tả'),
  logoUrl: Yup.string().required('Vui lòng nhập đường dẫn hình ảnh'),
});
const ModalBrand = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [type, setType] = useState('add');
  const handleOpen = (actionType) => {
    setOpen(true);
    setType(actionType); // Thiết lập loại hành động khi mở modal
  };
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      description: '',
      logoUrl: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (type === 'add') {
          await dispatch(addBrand(values));
          resetForm();
        } else if (type === 'edit') {
          const trimmedId = values.id.trim();
          const updatedValues = { ...values, id: trimmedId };

          await dispatch(putBrand(updatedValues));
          resetForm();
        }
      } catch (error) {
        console.error('Có lỗi khi submit form: ', error);
      }
    },
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Button disableRipple variant="contained" onClick={() => handleOpen('add')} sx={{ marginBottom: '20px' }}>
          Thêm nhãn hàng
        </Button>
        <Button disableRipple variant="contained" onClick={() => handleOpen('edit')} sx={{ marginBottom: '20px' }}>
          Sửa thông tin
        </Button>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <>
                {type === 'edit' && (
                  <TextField
                    fullWidth
                    margin="normal"
                    id="id"
                    name="id"
                    label="ID"
                    variant="outlined"
                    {...formik.getFieldProps('id')}
                  />
                )}
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
                  id="description"
                  name="description"
                  label="Miêu tả"
                  variant="outlined"
                  {...formik.getFieldProps('description')}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="logoUrl"
                  name="logoUrl"
                  label="Đường dẫn ảnh"
                  variant="outlined"
                  {...formik.getFieldProps('logoUrl')}
                />
              </>
              <Button color="primary" variant="contained" fullWidth type="submit">
                <Typography>{type === 'add' ? 'Tạo mới' : 'Cập nhật'}</Typography>
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ModalBrand;
