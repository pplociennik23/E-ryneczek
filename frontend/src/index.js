import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { thunk } from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const store = configureStore({
     reducer: reducers,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

const theme = createTheme({
     palette: {
       primary: {
         main: '#2e7d32', 
         contrastText: '#ffffff', 
       },
       secondary: {
         main: '#26a69a', 
         contrastText: '#ffffff', 
       },
       deleteAction: {
         main: '#b71c1c', 
         contrastText: '#ffffff', 
       },
       background: {
         default: '#eef8e7', 
       },
     },
   });

ReactDOM.render(
    <Provider store={store}>
       <ThemeProvider theme={theme}>
          <CssBaseline />
          <App/>
       </ThemeProvider>
    </Provider>,
   document.getElementById('root'));