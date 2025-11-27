import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onboarding: false,
};

const slice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.onboarding = action.payload;
    },
  },
});

export const { setOnboardingCompleted } = slice.actions;

export const onboardingReducer = slice.reducer;
