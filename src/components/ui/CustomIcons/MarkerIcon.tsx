import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const MarkerIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 40 64" {...props}>
      <Path
        fill={props?.color || COLORS.white}
        fillRule="evenodd"
        d="M0 20.297A20.53 20.53 0 0 1 3.177 9.323a20.1 20.1 0 0 1 8.516-7.489A19.73 19.73 0 0 1 22.845.207a19.87 19.87 0 0 1 10.25 4.75 20.34 20.34 0 0 1 6.093 9.62 20.6 20.6 0 0 1 .004 11.438 20.34 20.34 0 0 1-6.088 9.624 19.87 19.87 0 0 1-10.247 4.756V55.1l-.837 2.05L20 63.5l-2.02-6.35-.837-2.05V40.395A19.92 19.92 0 0 1 4.88 33.59 20.48 20.48 0 0 1 0 20.298m16.971-3.075A4.25 4.25 0 0 1 20 15.946c.758 0 1.485-.305 2.02-.85a2.92 2.92 0 0 0 .837-2.05c0-.77-.3-1.507-.837-2.05a2.84 2.84 0 0 0-2.02-.85 9.93 9.93 0 0 0-7.071 2.973A10.23 10.23 0 0 0 10 20.297c0 .769.301 1.506.837 2.05s1.262.85 2.02.85 1.485-.306 2.02-.85a2.92 2.92 0 0 0 .837-2.05c0-1.155.452-2.263 1.257-3.075"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default MarkerIcon;
