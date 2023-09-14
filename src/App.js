import { CssBaseline } from '@mui/material';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import '~/base.scss';

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
