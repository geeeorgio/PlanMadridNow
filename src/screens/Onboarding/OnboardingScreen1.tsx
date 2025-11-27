import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { GUIDE, ONBOARDING_BACKGROUND } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';
import { hp } from 'src/utils';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => navigation.navigate('OnboardingScreen2');

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
          Your personal Madrid guide is waiting. Chat, answer quick questions,
          and discover the city made just for you.
        </CustomText>

        <CustomButton onPress={handleNext} extraStyle={styles.button}>
          <CustomText extraStyle={styles.buttonText}>
            Start Exploring
          </CustomText>
        </CustomButton>
      </View>

      <View style={styles.guideImageWrapper}>
        <Image
          source={GUIDE.guide1}
          style={styles.guideImage}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen1;
