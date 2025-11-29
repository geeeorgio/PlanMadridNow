import React from 'react';
import { FlatList, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

interface ChatOptionsProps {
  options: { number: number; text: string }[];
  onOptionPress: (option: { number: number; text: string }) => void;
  selectedOptionNumber: number | null;
}

const ChatOptions = ({
  options,
  onOptionPress,
  selectedOptionNumber,
}: ChatOptionsProps) => {
  return (
    <FlatList
      data={options}
      keyExtractor={(item) => item.number.toString()}
      renderItem={({ item }) => {
        const isSelected = item.number === selectedOptionNumber;

        return (
          <CustomButton
            variant={isSelected ? 'golden' : 'brown'}
            onPress={() => onOptionPress(item)}
            extraStyle={styles.container}
          >
            <CustomText
              extraStyle={isSelected ? styles.selectedText : styles.text}
            >
              {item.text}
            </CustomText>
          </CustomButton>
        );
      }}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
      ListHeaderComponent={() => <View style={styles.headerContainer} />}
      ListFooterComponent={() => <View style={styles.footerContainer} />}
    />
  );
};

export default ChatOptions;
