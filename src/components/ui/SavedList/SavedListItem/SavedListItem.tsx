import React from 'react';
import { Image, Pressable, View } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import type { PlaceType } from 'src/types';
import { wp } from 'src/utils';

interface SavedListItemProps {
  item: PlaceType;
  handlePlacePress: (place: PlaceType) => void;
}

const SavedListItem = ({ item, handlePlacePress }: SavedListItemProps) => {
  return (
    <Pressable
      onPress={() => handlePlacePress(item)}
      hitSlop={wp(6)}
      style={({ pressed }) => pressed && { opacity: 0.7 }}
    >
      <CustomContainer variant="brown" extraStyle={styles.placeContainer}>
        <View style={styles.imgeContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <CustomText extraStyle={styles.title}>{item.title}</CustomText>
      </CustomContainer>
    </Pressable>
  );
};

export default SavedListItem;
