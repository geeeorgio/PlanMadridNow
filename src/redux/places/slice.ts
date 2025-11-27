import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { PLACES } from 'src/constants';
import type { PlaceType } from 'src/types';

interface PlacesState {
  places: PlaceType[];
  currentPlace: PlaceType | null;
  savedPlaces: PlaceType[];
}

const initialState: PlacesState = {
  places: PLACES.map((p) => ({ ...p })),
  currentPlace: null,
  savedPlaces: [],
};

const slice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setCurrentPlace: (state, action: PayloadAction<PlaceType | null>) => {
      state.currentPlace = action.payload;
    },

    toggleFavoritePlace: (state, action: PayloadAction<PlaceType>) => {
      const exists = state.savedPlaces.some(
        (pl) => pl.id === action.payload.id,
      );

      state.savedPlaces = exists
        ? state.savedPlaces.filter((pl) => pl.id !== action.payload.id)
        : [...state.savedPlaces, action.payload];
    },
  },
});

export const { setCurrentPlace, toggleFavoritePlace } = slice.actions;

export const placesReducer = slice.reducer;
