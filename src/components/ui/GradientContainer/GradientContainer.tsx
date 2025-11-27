import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface GradientContainerProps {
  children: ReactNode;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  extraStyle?: StyleProp<ViewStyle>;
}

const GradientContainer = ({
  children,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  colors = COLORS.goldenGradient,
  extraStyle,
}: GradientContainerProps) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, extraStyle]}
      start={start}
      end={end}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;
