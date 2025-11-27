import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { Layout } from 'src/components';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectIsOnboardingCompleted } from 'src/redux/onboarding/selectors';
import type { RootNavigationParamsList } from 'src/types';

const RootStack = createNativeStackNavigator<RootNavigationParamsList>();

const RootNavigator = () => {
  const isOnboardingCompleted = useAppSelector(selectIsOnboardingCompleted);

  return (
    <Layout>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          gestureEnabled: false,
          animation: 'fade',
        }}
      >
        {isOnboardingCompleted ? (
          <RootStack.Screen name="MainStack" component={MainNavigator} />
        ) : (
          <RootStack.Screen
            name="OnboardingStack"
            component={OnboardingNavigator}
          />
        )}
      </RootStack.Navigator>
    </Layout>
  );
};

export default RootNavigator;
