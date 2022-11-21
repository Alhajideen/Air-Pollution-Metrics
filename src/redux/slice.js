import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: [], loading: false, error: null };

export const polutionSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default polutionSlice.reducer;
