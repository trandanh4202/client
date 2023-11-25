import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrand, getBrands } from '~/features/brands/brandsSlice';
import { addProduct, putProduct } from '~/features/products/productsSlice';
import { getCategories } from '~/features/category/categoriesSlice';
const validationSchema = Yup.object({
  name: Yup.string().required('Vui lòng nhập tên loại'),
  description: Yup.string().required('Vui lòng nhập miêu tả'),
  price: Yup.string()
    .required('Vui lòng nhập giá')
    .matches(/^[0-9]+$/, 'Vui lòng chỉ nhập số cho giá'),
  imageUrl: Yup.string().required('Vui lòng nhập tên loại'),
  unit: Yup.string().required('Vui lòng nhập đường dẫn hình ảnh'),
  quantity: Yup.string()
    .required('Vui lòng nhập số lượng')
    .matches(/^[0-9]+$/, 'Vui lòng chỉ nhập số cho số lượng'),
  categoryId: Yup.string().required('Vui lòng nhập đường dẫn hình ảnh'),
  brandId: Yup.string().required('Vui lòng nhập đường dẫn hình ảnh'),
});
const ModalProduct = () => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [type, setType] = useState('add');
  const handleOpen = (actionType) => {
    setOpen(true);
    setType(actionType); // Thiết lập loại hành động khi mở modal
  };
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
  }, [dispatch]);
  const brands = useSelector((state) => state.brands.brands);
  const categories = useSelector((state) => state.categories.categories);
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      unit: 'Unit',
      quantity: '',
      categoryId: '',
      brandId: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (type === 'add') {
          await dispatch(addProduct(values));
          resetForm();
        } else if (type === 'edit') {
          const trimmedId = values.id.trim();
          const updatedValues = { ...values, id: trimmedId };

          await dispatch(putProduct(updatedValues));
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
          Thêm sản phẩm
        </Button>
        <Button disableRipple variant="contained" onClick={() => handleOpen('edit')} sx={{ marginBottom: '20px' }}>
          Sửa sản phẩm
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
                  id="price"
                  name="price"
                  label="Giá bán"
                  variant="outlined"
                  {...formik.getFieldProps('price')}
                  type="number"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="imageUrl"
                  name="imageUrl"
                  label="Đường dẫn ảnh"
                  variant="outlined"
                  {...formik.getFieldProps('imageUrl')}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="unit"
                  name="unit"
                  label="Miêu tả"
                  variant="outlined"
                  {...formik.getFieldProps('unit')}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Số lượng"
                  variant="outlined"
                  {...formik.getFieldProps('quantity')}
                  type="number"
                />

                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel id="category-label">Loại sản phẩm</InputLabel>
                  <Select
                    labelId="category-label"
                    id="categoryId"
                    name="categoryId"
                    // value={selectedCategory}
                    // onChange={(e) => setSelectedCategory(e.target.value)}
                    label="Category"
                    {...formik.getFieldProps('categoryId')}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel id="category-label">Nhãn hàng</InputLabel>
                  <Select
                    labelId="brand-label"
                    id="brandId"
                    name="brandId"
                    label="brand"
                    {...formik.getFieldProps('brandId')}
                  >
                    {brands.map((brand) => (
                      <MenuItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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

export default ModalProduct;
