import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const HomeIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 30 30" {...props}>
      <Path
        fill={props?.color || COLORS.white}
        d="m16.06.44 13.498 13.5c.945.944.276 2.56-1.06 2.56h-1.5v9a4.5 4.5 0 0 1-4.5 4.5h-1.5V19.5a4.5 4.5 0 0 0-4.235-4.493L16.5 15h-3A4.5 4.5 0 0 0 9 19.5V30H7.502a4.5 4.5 0 0 1-4.499-4.5v-9h-1.5c-1.334 0-2.005-1.616-1.06-2.56L13.94.44a1.5 1.5 0 0 1 2.12 0M16.5 18a1.5 1.5 0 0 1 1.5 1.5V30h-6V19.5a1.5 1.5 0 0 1 1.325-1.49L13.5 18z"
      ></Path>
    </Svg>
  );
};

export default HomeIcon;
