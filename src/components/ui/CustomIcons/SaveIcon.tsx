import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const SaveIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 13 20" {...props}>
      <Path
        fill={props?.color || COLORS.white}
        d="M0 3.644c0-1.276 0-1.913.236-2.4.208-.43.54-.777.947-.996C1.647 0 2.253 0 3.467 0h6.066c1.214 0 1.82 0 2.284.248.408.219.74.567.947.995.236.488.236 1.125.236 2.4v15.15c0 .553 0 .83-.11.981a.55.55 0 0 1-.176.159.5.5 0 0 1-.224.066c-.181.012-.4-.142-.838-.448L6.5 15.94 1.348 19.55c-.438.307-.657.46-.839.45a.52.52 0 0 1-.4-.226C0 19.622 0 19.346 0 18.792z"
      ></Path>
    </Svg>
  );
};

export default SaveIcon;
