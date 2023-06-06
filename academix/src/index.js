import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './styles/theme';

import LandingPage from './pages/landing/landingPage';








const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <LandingPage/>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);


