import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { LOGO_IMG } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';
import { hp } from 'src/utils';

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => navigation.navigate('OnboardingScreen1');

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.plainContainer,
        {
          paddingTop: insets.top + hp(24),
          paddingBottom: insets.bottom + hp(24),
        },
      ]}
    >
      <View style={styles.contentWrapper}>
        <View style={styles.logoWrapper}>
          <Image source={LOGO_IMG} style={styles.logo} resizeMode="contain" />
        </View>
      </View>

      <CustomButton extraStyle={styles.button} onPress={handleNext}>
        <CustomText extraStyle={styles.buttonText}>Start</CustomText>
      </CustomButton>
    </View>
  );
};

export default OnboardingScreen;
