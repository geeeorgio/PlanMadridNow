import type { RootState } from '../store';

export const selectIsMusicEnabled = (state: RootState) =>
  state.settings.isMusicEnabled;

export const selectIsVibrationEnabled = (state: RootState) =>
  state.settings.isVibrationEnabled;
