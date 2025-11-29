import React from 'react';
import { FlatList, View } from 'react-native';

import SavedListItem from '../SavedListItem/SavedListItem';

import { styles } from './styles';

import type { PlaceType } from 'src/types';

interface SavedListProps {
  savedPlaces: PlaceType[];
  handlePlacePress: (place: PlaceType) => void;
}

const SavedList = ({ savedPlaces, handlePlacePress }: SavedListProps) => {
  return (
    <FlatList
      data={savedPlaces}
      style={styles.flatList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item: PlaceType }) => (
        <SavedListItem item={item} handlePlacePress={handlePlacePress} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
      ListFooterComponent={() => <View style={styles.footerContainer} />}
    />
  );
};

export default SavedList;
