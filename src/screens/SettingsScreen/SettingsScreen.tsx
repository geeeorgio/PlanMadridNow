import React from 'react';
import { Switch, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomScreenWrapper,
  CustomText,
  ShareIcon,
} from 'src/components';
import { COLORS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectIsMusicEnabled,
  selectIsVibrationEnabled,
} from 'src/redux/settings/selectors';
import {
  setIsMusicEnabled,
  setIsVibrationEnabled,
} from 'src/redux/settings/slice';
import { handleShare, hp, wp } from 'src/utils';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const isMusic = useAppSelector(selectIsMusicEnabled);
  const isVibration = useAppSelector(selectIsVibrationEnabled);

  const toggleMusic = (value: boolean) => {
    dispatch(setIsMusicEnabled(value));
  };

  const toggleVibration = (value: boolean) => {
    dispatch(setIsVibrationEnabled(value));
  };

  const handleSharePress = () => {
    handleShare();
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.musicContainer}>
          <CustomText extraStyle={styles.text}>Music</CustomText>
          <Switch
            value={isMusic}
            onValueChange={toggleMusic}
            trackColor={{ true: COLORS.green, false: COLORS.bgDark }}
            thumbColor={COLORS.white}
            style={styles.switch}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.vibrationContainer}>
          <CustomText extraStyle={styles.text}>Vibration</CustomText>
          <Switch
            value={isVibration}
            onValueChange={toggleVibration}
            trackColor={{ true: COLORS.green, false: COLORS.bgDark }}
            thumbColor={COLORS.white}
            style={styles.switch}
          />
        </View>
        <View style={styles.divider} />

        <CustomButton
          variant="golden"
          onPress={handleSharePress}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Share app</CustomText>
          <ShareIcon width={wp(20)} height={hp(20)} color={COLORS.darkBrown} />
        </CustomButton>
      </View>
    </CustomScreenWrapper>
  );
};

export default SettingsScreen;
