import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMusicEnabled: true,
  isVibrationEnabled: true,
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setIsMusicEnabled: (state, action: PayloadAction<boolean>) => {
      state.isMusicEnabled = action.payload;
    },
    setIsVibrationEnabled: (state, action: PayloadAction<boolean>) => {
      state.isVibrationEnabled = action.payload;
    },
  },
});

export const { setIsMusicEnabled, setIsVibrationEnabled } = slice.actions;

export const settingsReducer = slice.reducer;
