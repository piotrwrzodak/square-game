import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
        if (action.payload > 1) {
            state.value += action.payload;
        }
    },
    resetValue: (state) => {
        state.value = 0;
    }
  },
});

export const { incrementByAmount, resetValue } = scoreSlice.actions;

export const selectScore = state => state.score.value;

export default scoreSlice.reducer;
