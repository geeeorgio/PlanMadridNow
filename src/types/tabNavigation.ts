import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type TabNavigationParamsList = {
  HomeScreen: undefined;
  SavedPlacesScreen: undefined;
  MapsScreen: undefined;
  SettingsScreen: undefined;
};

export type TabNavigationProp =
  BottomTabNavigationProp<TabNavigationParamsList>;
