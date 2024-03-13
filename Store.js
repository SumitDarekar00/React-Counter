import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counterSlice';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
