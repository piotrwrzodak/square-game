import { configureStore } from '@reduxjs/toolkit';
import gridReducer from './slices/gridSlice';
import scoreReducer from './slices/scoreSlice';

export const store = configureStore({
  reducer: {
    grid: gridReducer,
    score: scoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
