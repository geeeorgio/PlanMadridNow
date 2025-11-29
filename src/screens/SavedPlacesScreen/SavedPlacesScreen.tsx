import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomScreenWrapper, CustomText, SavedList } from 'src/components';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectSavedPlaces } from 'src/redux/places/selectors';
import type { MainStackNavigationProp, PlaceType } from 'src/types';

const SavedPlacesScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const savedPlaces = useAppSelector(selectSavedPlaces);

  const handlePlacePress = (place: PlaceType) => {
    navigation.navigate('PlaceDetailsScreen', { place });
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {savedPlaces.length > 0 ? (
        <SavedList
          savedPlaces={savedPlaces}
          handlePlacePress={handlePlacePress}
        />
      ) : (
        <View style={styles.noPlacesContainer}>
          <CustomText extraStyle={styles.noPlacesText}>
            You haven't saved anything yet.
          </CustomText>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default SavedPlacesScreen;
