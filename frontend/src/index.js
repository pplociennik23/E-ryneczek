import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const store = configureStore({
     reducer: reducers,
     middleware: [thunk],
})

ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>,
   document.getElementById('root'));