import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainStackNavigationParamsList } from './mainNavigation';
import type { OnboardingStackParamsList } from './onboardingNavigation';

export type RootNavigationParamsList = {
  OnboardingStack: NavigatorScreenParams<OnboardingStackParamsList>;
  MainStack: NavigatorScreenParams<MainStackNavigationParamsList>;
};

export type RootNavigationProp =
  NativeStackNavigationProp<RootNavigationParamsList>;
