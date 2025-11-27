import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const SettingsIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 30 30" {...props}>
      <Path
        fill={props?.color || COLORS.white}
        d="M18.97 3.122a1.085 1.085 0 0 0 1.62.672c3.659-2.228 7.845 1.957 5.618 5.616a1.087 1.087 0 0 0 .67 1.62c4.163 1.01 4.163 6.93 0 7.94a1.085 1.085 0 0 0-.672 1.62c2.228 3.659-1.957 7.845-5.616 5.618a1.087 1.087 0 0 0-1.62.67c-1.01 4.163-6.93 4.163-7.94 0a1.085 1.085 0 0 0-1.62-.672C5.75 28.434 1.565 24.25 3.792 20.59a1.086 1.086 0 0 0-.67-1.62c-4.163-1.01-4.163-6.93 0-7.94a1.085 1.085 0 0 0 .672-1.62C1.566 5.75 5.75 1.565 9.41 3.792a1.083 1.083 0 0 0 1.62-.67c1.01-4.163 6.93-4.163 7.94 0M15 10.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
      ></Path>
    </Svg>
  );
};

export default SettingsIcon;
