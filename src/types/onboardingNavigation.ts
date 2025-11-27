import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnboardingStackParamsList = {
  OnboardingScreen: undefined;
  OnboardingScreen1: undefined;
  OnboardingScreen2: undefined;
  OnboardingScreen3: undefined;
  OnboardingScreen4: undefined;
};

export type OnboardingStackNavigationProp = NativeStackNavigationProp<
  OnboardingStackParamsList,
  'OnboardingScreen'
>;
