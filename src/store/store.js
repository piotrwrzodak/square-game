import { configureStore } from '@reduxjs/toolkit';
import gridReducer from './slices/gridSlice';
import scoreReducer from './slices/scoreSlice';

export default configureStore({
  reducer: {
    grid: gridReducer,
    score: scoreReducer,
  },
});
