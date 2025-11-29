import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  button: {
    borderRadius: wp(68),
  },
  brown: {
    backgroundColor: COLORS.bgDark,
  },
  golden: {
    backgroundColor: COLORS.gold,
  },
  disabled: {
    opacity: 0.7,
  },
});
