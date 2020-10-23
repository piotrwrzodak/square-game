import { configureStore } from '@reduxjs/toolkit';
import gridReducer from '../features/grid/gridSlice';
import scoreReducer from '../features/score/scoreSlice';

export default configureStore({
  reducer: {
    grid: gridReducer,
    score: scoreReducer,
  },
});
