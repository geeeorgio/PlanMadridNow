import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import {
  HomeScreen,
  MapsScreen,
  SavedPlacesScreen,
  SettingsScreen,
} from 'src/screens';
import type { TabNavigationParamsList } from 'src/types';

const TabStack = createBottomTabNavigator<TabNavigationParamsList>();

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        sceneStyle: { backgroundColor: 'transparent' },
        tabBarShowLabel: false,
        animation: 'fade',
      }}
    >
      <TabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <TabStack.Screen
        name="SavedPlacesScreen"
        component={SavedPlacesScreen}
        options={{
          title: 'Saved',
        }}
      />
      <TabStack.Screen
        name="MapsScreen"
        component={MapsScreen}
        options={{
          title: 'Maps',
        }}
      />
      <TabStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
