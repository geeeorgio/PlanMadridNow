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
  disabled?: boolean;
}

const CustomButton = ({
  children,
  variant = 'golden',
  onPress,
  extraStyle,
  disabled,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        extraStyle,
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      {children}
    </Pressable>
  );
};

export default CustomButton;
