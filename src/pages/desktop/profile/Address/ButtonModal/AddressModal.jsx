import React, { useEffect, useState } from 'react';

import FlexBetween from '~/components/flexbetween/FlexBetween';
import { useDispatch, useSelector } from 'react-redux';
import { createAddresses, getAddresses, putAddresses } from '~/features/address/addressSlice';
import { getDistrict, getProvince, getWard } from '~/features/GHN/ghnSlice';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';

function AddressModal({ open, close, action }) {
  const handleSubmit = () => {
    if (action === 'add') {
      console.log('add');
    } else {
      console.log('edit');
    }
  };

  const dispatch = useDispatch();
  const { province, district, ward } = useSelector((state) => state.ghn);

  const [selectedAddress, setSelectedAddress] = useState({
    provinceName: '',
    provinceId: 0,
    districtName: '',
    districtId: 0,
    wardName: '',
    wardCode: '',
    detail: '',
  });

  const handleProvinceChange = (e) => {
    const selectedProvinceID = e.target.dataset.value;
    const selectedProvinceName = e.target.dataset.name;
    setSelectedAddress({
      provinceName: selectedProvinceName,
      provinceId: selectedProvinceID,
      districtName: '',
      districtId: 0,
      wardName: '',
      wardCode: '',
    });
    if (selectedProvinceID) {
      dispatch(getDistrict(selectedProvinceID));
    }
  };
  const handleDistrictChange = (event) => {
    const selectedDistrictID = event.target.dataset.value;
    const SelectedDistrictName = event.target.dataset.name;
    setSelectedAddress({
      ...selectedAddress,
      districtName: SelectedDistrictName,
      districtId: selectedDistrictID,
      wardName: '',
      wardCode: '',
    });
    if (selectedDistrictID) {
      dispatch(getWard(selectedDistrictID));
    }
  };
  const handleWardChange = (event) => {
    const selectedWardtID = event.target.dataset.value; // Lấy giá trị từ thuộc tính data-value
    const SelectedWardtName = event.target.dataset.name; // Lấy giá trị từ thuộc tính data-name
    setSelectedAddress({
      ...selectedAddress,
      wardtName: SelectedWardtName,
      wardCode: selectedWardtID,
    });
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
          width: '50a%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px' }}>
          {action === 'add' ? 'Thêm đại chỉ' : 'Cập nhật địa chỉ'}
        </Typography>

        <Box onSubmit={handleSubmit}>
          <FlexBetween sx={{ flex: '0 0 40%' }}>
            <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
              <InputLabel htmlFor="province">Tỉnh</InputLabel>
              <Select id="province" name="province" variant="outlined" label="Tỉnh">
                <MenuItem value="" disabled>
                  Chọn tỉnh
                </MenuItem>
                {province?.map((province) => (
                  <MenuItem
                    data-name={province.ProvinceName}
                    value={province.ProvinceID}
                    onClick={handleProvinceChange}
                  >
                    {province.ProvinceName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
              <InputLabel htmlFor="district">Huyện</InputLabel>
              <Select id="district" name="district" variant="outlined" label="Huyện">
                <MenuItem value="" disabled>
                  Chọn huyện
                </MenuItem>
                {district.map((district) => (
                  <MenuItem
                    key={district.DistrictID}
                    value={district.DistrictID}
                    data-name={district.DistrictName}
                    onClick={handleDistrictChange}
                  >
                    {district.DistrictName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FlexBetween>
          <FlexBetween>
            <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
              <InputLabel htmlFor="ward">Phường</InputLabel>
              <Select id="ward" name="ward" variant="outlined" label="Phường">
                <MenuItem value="" disabled>
                  Chọn phường
                </MenuItem>
                {ward.map((ward) => (
                  <MenuItem
                    key={ward.WardCode}
                    value={ward.WardCode}
                    data-name={ward.WardName}
                    onClick={handleWardChange}
                  >
                    {ward.WardName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ flex: '0 0 49%', marginBottom: '16px' }}>
              <TextField variant="outlined" label="Chi tiết địa chỉ" name="detail" />
            </FormControl>
          </FlexBetween>
          <FlexBetween>
            <Box control={<TextField as={Checkbox} type="checkbox" name="isDefault" />} label="Làm địa chỉ mặc định" />
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '16px' }}>
              Lưu
            </Button>
          </FlexBetween>
        </Box>
      </Paper>
    </Modal>
  );
}

export default AddressModal;
