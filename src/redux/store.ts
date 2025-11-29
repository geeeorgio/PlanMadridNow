import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { onboardingReducer } from './onboarding/slice';
import { placesReducer } from './places/slice';
import { settingsReducer } from './settings/slice';

const persistOnboardingConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const persistPlacesConfig = {
  key: 'places',
  storage: AsyncStorage,
};

const persistSettingsConfig = {
  key: 'settings',
  storage: AsyncStorage,
};

const persistedOnboardingReducer = persistReducer(
  persistOnboardingConfig,
  onboardingReducer,
);

const persistedPlacesReducer = persistReducer(
  persistPlacesConfig,
  placesReducer,
);

const persistedSettingsReducer = persistReducer(
  persistSettingsConfig,
  settingsReducer,
);

const store = configureStore({
  reducer: {
    onboarding: persistedOnboardingReducer,
    places: persistedPlacesReducer,
    settings: persistedSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
