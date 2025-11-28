import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { PlaceType } from './places';
import type { TabNavigationParamsList } from './tabNavigation';

export type MainStackNavigationParamsList = {
  TabNavigationStack: NavigatorScreenParams<TabNavigationParamsList>;

  MenuScreen: undefined;
  MapDetailsScreen: {
    place: PlaceType;
    fromSreen?: 'MenuScreen' | 'SavedPlacesScreen';
  };
  PlaceDetailsScreen: {
    place: PlaceType;
    fromSreen?: 'MenuScreen' | 'SavedPlacesScreen';
  };
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackNavigationParamsList>;
