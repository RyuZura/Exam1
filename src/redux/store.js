import { configureStore } from '@reduxjs/toolkit';
import chemicalsReducer from './chemicalSlice';

export const store = configureStore({
  reducer: {
    chemicals: chemicalsReducer
  }
});
