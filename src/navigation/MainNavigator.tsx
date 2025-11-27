import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabNavigator from './TabNavigator';

import { MapDetailsScreen, MenuScreen, PlaceDetailsScreen } from 'src/screens';
import type { MainStackNavigationParamsList } from 'src/types';

const MainStack = createNativeStackNavigator<MainStackNavigationParamsList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      <MainStack.Screen name="TabNavigationStack" component={TabNavigator} />
      <MainStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          title: 'Chat',
        }}
      />
      <MainStack.Screen name="MapDetailsScreen" component={MapDetailsScreen} />
      <MainStack.Screen
        name="PlaceDetailsScreen"
        component={PlaceDetailsScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
