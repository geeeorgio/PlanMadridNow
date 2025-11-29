import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomScreenWrapper, CustomText, SavedList } from 'src/components';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectPlaces } from 'src/redux/places/selectors';
import type { MainStackNavigationProp, PlaceType } from 'src/types';

const MapsScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const places = useAppSelector(selectPlaces);

  const handlePlacePress = (place: PlaceType) => {
    navigation.navigate('MapDetailsScreen', { place });
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {places.length > 0 ? (
        <SavedList savedPlaces={places} handlePlacePress={handlePlacePress} />
      ) : (
        <View style={styles.noPlacesContainer}>
          <CustomText extraStyle={styles.noPlacesText}>
            Sorry, we didn't find any places near you.
          </CustomText>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default MapsScreen;
