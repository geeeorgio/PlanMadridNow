import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomScreenWrapper, CustomText } from 'src/components';
import { GUIDE } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleOpenChat = () => {
    navigation.navigate('MenuScreen');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.content}>
        <CustomText extraStyle={styles.title}>
          Start a chat with a guide
        </CustomText>
        <CustomButton
          variant="brown"
          onPress={handleOpenChat}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Open chat</CustomText>
        </CustomButton>
      </View>

      <View style={styles.guideImgWrapper}>
        <Image
          source={GUIDE.guide1}
          style={styles.guideImg}
          resizeMode="contain"
        />
      </View>
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
