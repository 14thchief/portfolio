import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../features/hero/heroSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});
