import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  OnboardingScreen,
  OnboardingScreen1,
  OnboardingScreen2,
  OnboardingScreen3,
  OnboardingScreen4,
} from 'src/screens';
import type { OnboardingStackParamsList } from 'src/types';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamsList>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <OnboardingStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen4"
        component={OnboardingScreen4}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
