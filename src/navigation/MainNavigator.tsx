import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabNavigator from './TabNavigator';

import { CustomHeader, GradientContainer } from 'src/components';
import { MapDetailsScreen, MenuScreen, PlaceDetailsScreen } from 'src/screens';
import type { MainStackNavigationParamsList } from 'src/types';

const MainStack = createNativeStackNavigator<MainStackNavigationParamsList>();

const MainNavigator = () => {
  return (
    <GradientContainer>
      <MainStack.Navigator
        screenOptions={{
          header: (props) => <CustomHeader props={props} />,
          contentStyle: { backgroundColor: 'transparent' },
          gestureEnabled: false,
          animation: 'slide_from_right',
        }}
      >
        <MainStack.Screen
          name="TabNavigationStack"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            title: 'Chat',
          }}
        />
        <MainStack.Screen
          name="MapDetailsScreen"
          component={MapDetailsScreen}
          options={{ animation: 'none' }}
        />
        <MainStack.Screen
          name="PlaceDetailsScreen"
          component={PlaceDetailsScreen}
        />
      </MainStack.Navigator>
    </GradientContainer>
  );
};

export default MainNavigator;
