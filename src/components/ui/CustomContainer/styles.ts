import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    padding: wp(20),
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
  },
  brown: {
    backgroundColor: COLORS.bgDark,
    borderBottomRightRadius: wp(20),
    borderBottomLeftRadius: wp(0),
  },
  golden: {
    backgroundColor: COLORS.gold,
    borderBottomRightRadius: wp(0),
    borderBottomLeftRadius: wp(20),
  },
});
