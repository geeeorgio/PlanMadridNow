import type { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { LOGO_IMG } from 'src/constants';
import type { MainStackNavigationProp, PlaceType } from 'src/types';
import { wp } from 'src/utils';

interface CustomHeaderProps {
  props: BottomTabHeaderProps | NativeStackHeaderProps;
}

const CustomHeader = ({ props }: CustomHeaderProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const { options } = props;
  const { title } = options;

  const params = props.route.params;

  const place = (params as { place: PlaceType })?.place;

  const handleHomePress = () => {
    navigation.navigate('TabNavigationStack', {
      screen: 'HomeScreen',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={handleHomePress}
          style={styles.backButton}
          hitSlop={wp(10)}
        >
          <Image
            source={LOGO_IMG}
            style={styles.backButtonIcon}
            resizeMode="contain"
          />
        </Pressable>

        <CustomText extraStyle={styles.title}>
          {place?.shortTitle || title}
        </CustomText>

        <View style={styles.emptyView} />
      </View>
    </View>
  );
};

export default CustomHeader;
