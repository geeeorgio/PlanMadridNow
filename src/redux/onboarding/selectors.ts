import type { RootState } from '../store';

export const selectIsOnboardingCompleted = (state: RootState) =>
  state.onboarding.onboarding;
