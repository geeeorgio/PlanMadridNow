import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { LOGO_IMG, ONBOARDING_BACKGROUND } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { setOnboardingCompleted } from 'src/redux/onboarding/slice';
import { hp } from 'src/utils';

const OnboardingScreen4 = () => {
  const dispatch = useAppDispatch();

  const handleStart = () => dispatch(setOnboardingCompleted(true));

  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={ONBOARDING_BACKGROUND}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top + hp(24),
            paddingBottom: insets.bottom + hp(24),
          },
        ]}
      >
        <CustomText extraStyle={styles.title}>
          Save favorite spots, create your profile, and start planning your
          perfect city adventure.
        </CustomText>

        <View style={styles.logoWrapper}>
          <Image source={LOGO_IMG} style={styles.logo} resizeMode="contain" />
        </View>

        <CustomButton onPress={handleStart} extraStyle={styles.button}>
          <CustomText extraStyle={styles.buttonText}>Get Started!</CustomText>
        </CustomButton>
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen4;
