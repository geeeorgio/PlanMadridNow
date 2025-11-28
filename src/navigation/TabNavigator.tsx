import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { CustomHeader, CustomTabBar } from 'src/components';
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
        header: (props) => <CustomHeader props={props} />,
        headerTransparent: true,
        sceneStyle: { backgroundColor: 'transparent' },
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
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
