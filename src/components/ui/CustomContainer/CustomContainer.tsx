import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps {
  children: ReactNode;
  variant?: 'brown' | 'golden' | 'menu';
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomContainer = ({
  children,
  variant = 'brown',
  extraStyle,
}: CustomContainerProps) => {
  return (
    <View style={[styles.container, styles[variant], extraStyle]}>
      {children}
    </View>
  );
};

export default CustomContainer;
