import React from 'react';
import { FlatList } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

interface ChatOptionsProps {
  options: { number: number; text: string }[];
  onOptionPress: (option: { number: number; text: string }) => void;
}

const ChatOptions = ({ options, onOptionPress }: ChatOptionsProps) => {
  let variant: 'brown' | 'golden' = 'brown';

  const handleOptionPress = (option: { number: number; text: string }) => {
    variant = 'golden';
    onOptionPress(option);
  };

  return (
    <FlatList
      data={options}
      keyExtractor={(item) => item.number.toString()}
      renderItem={({ item }) => (
        <CustomButton
          variant={variant}
          onPress={() => handleOptionPress(item)}
          extraStyle={styles.container}
        >
          <CustomText extraStyle={styles.text}>{item.text}</CustomText>
        </CustomButton>
      )}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default ChatOptions;
