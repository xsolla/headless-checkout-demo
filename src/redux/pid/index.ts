import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

const initialState = {
  pid: null,
};

const pidSlice = createSlice({
  name: 'pid',
  initialState,
  reducers: {
    setPid: (state, action: PayloadAction<string>) => {
      state.pid = action.payload;
    },
  },
});

export const { setPid } = pidSlice.actions;

export const selectPid = (state: RootState) => state.pid.pid;

export default pidSlice.reducer;
