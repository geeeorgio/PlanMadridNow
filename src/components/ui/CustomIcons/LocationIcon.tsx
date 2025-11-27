import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const LocationIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 16 20" {...props}>
      <Path
        fill={props?.color || COLORS.white}
        d="M8 0a8.08 8.08 0 0 0-5.654 2.304A7.8 7.8 0 0 0 0 7.857a7.7 7.7 0 0 0 1.612 4.714s.218.283.253.323L8 20l6.137-7.11c.032-.037.251-.319.251-.319l.001-.002A7.7 7.7 0 0 0 16 7.857a7.8 7.8 0 0 0-2.346-5.553A8.08 8.08 0 0 0 8 0m0 10.714a2.95 2.95 0 0 1-1.616-.481A2.87 2.87 0 0 1 5.312 8.95 2.8 2.8 0 0 1 5.147 7.3c.112-.554.39-1.064.796-1.463.407-.4.925-.672 1.49-.782a2.96 2.96 0 0 1 1.68.162c.532.217.986.583 1.306 1.053s.49 1.022.49 1.587a2.84 2.84 0 0 1-.853 2.02A2.94 2.94 0 0 1 8 10.713"
      ></Path>
    </Svg>
  );
};

export default LocationIcon;
