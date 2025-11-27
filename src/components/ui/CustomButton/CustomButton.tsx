import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'brown' | 'golden';
  onPress: () => void;
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomButton = ({
  children,
  variant = 'golden',
  onPress,
  extraStyle,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={[styles.button, styles[variant], extraStyle]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default CustomButton;
