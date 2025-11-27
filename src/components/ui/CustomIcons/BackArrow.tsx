import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackArrow = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 29 25" {...props}>
      <Path
        fill={props?.color || COLORS.white}
        fillRule="evenodd"
        d="M29 24.88q-5.322-6.59-9.451-7.477-4.13-.889-7.863-.268V25L0 12.165 11.686 0v7.476q6.903.055 11.739 5.024Q28.259 17.47 29 24.88"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default BackArrow;
