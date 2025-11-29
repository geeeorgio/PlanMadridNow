import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface CustomScreenWrapperProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
}

const CustomScreenWrapper = ({
  children,
  extraStyle,
  edges,
}: CustomScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.container, extraStyle]} edges={edges}>
      {children}
    </SafeAreaView>
  );
};

export default CustomScreenWrapper;
