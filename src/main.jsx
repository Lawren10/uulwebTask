import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import GlobalStyles from "@mui/material/GlobalStyles"
import { ThemeProvider } from '@emotion/react';
import { AppGlobalStyles } from './appGlobalStyle.js'
import AppTheme from './appTheme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GlobalStyles styles={AppGlobalStyles} />
    <BrowserRouter>
    <ThemeProvider theme={AppTheme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
