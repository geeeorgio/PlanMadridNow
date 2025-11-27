import type { RootState } from '../store';

export const selectPlaces = (state: RootState) => state.places.places;

export const selectCurrentPlace = (state: RootState) =>
  state.places.currentPlace;

export const selectSavedPlaces = (state: RootState) => state.places.savedPlaces;
