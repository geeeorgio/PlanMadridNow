import React from 'react';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  CustomText,
  GradientContainer,
} from 'src/components';

const HomeScreen = () => {
  return (
    <GradientContainer>
      <CustomScreenWrapper extraStyle={styles.container}>
        <CustomText>Home</CustomText>
      </CustomScreenWrapper>
    </GradientContainer>
  );
};

export default HomeScreen;
