import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FlexBetween from '~/components/flexbetween/FlexBetween';

export default function A() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const list = ['1', '2', '3'];
  return (
    <Box sx={{ width: '10%', margin: '40px', padding: '10px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {list.map((value, index) => (
            <MenuItem key={index} value={index}>
              Ten
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
