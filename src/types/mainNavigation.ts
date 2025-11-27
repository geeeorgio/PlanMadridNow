import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { TabNavigationParamsList } from './tabNavigation';

export type MainStackNavigationParamsList = {
  TabNavigationStack: NavigatorScreenParams<TabNavigationParamsList>;

  MenuScreen: undefined;
  MapDetailsScreen: {
    placeId: string;
    fromSreen?: 'MenuScreen' | 'SavedPlacesScreen';
  };
  PlaceDetailsScreen: {
    placeId: string;
    fromSreen?: 'MenuScreen' | 'SavedPlacesScreen';
  };
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackNavigationParamsList>;
