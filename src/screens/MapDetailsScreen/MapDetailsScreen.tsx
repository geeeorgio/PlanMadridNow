import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { styles } from './styles';

import {
  BackArrow,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import type {
  MainStackNavigationParamsList,
  MainStackNavigationProp,
} from 'src/types';
import { hp, wp } from 'src/utils';

const MapDetailsScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const route =
    useRoute<RouteProp<MainStackNavigationParamsList, 'MapDetailsScreen'>>();

  const place = route.params.place;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <CustomScreenWrapper
      extraStyle={styles.container}
      edges={['bottom', 'left', 'right']}
    >
      <View style={styles.infoContainer}>
        <Pressable
          style={styles.backBtn}
          onPress={handleBackPress}
          hitSlop={wp(10)}
        >
          <BackArrow width={wp(29)} height={hp(25)} />
        </Pressable>
        <View style={styles.imageContainer}>
          <Image
            source={place.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <CustomContainer
          variant="brown"
          extraStyle={styles.coordinatesContainer}
        >
          <CustomText extraStyle={styles.coordinatesText}>
            {`Coordinates: ${place.coordinates.latitude}° N, ${place.coordinates.longitude}° W`}
          </CustomText>
        </CustomContainer>
      </View>

      <View style={styles.mapContainer}>
        <CustomText>Map</CustomText>
      </View>
    </CustomScreenWrapper>
  );
};

export default MapDetailsScreen;
