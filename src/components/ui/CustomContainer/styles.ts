import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    padding: wp(20),
  },
  brown: {
    backgroundColor: COLORS.bgDark,
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    borderBottomRightRadius: wp(20),
    borderBottomLeftRadius: wp(0),
  },
  golden: {
    backgroundColor: COLORS.gold,
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    borderBottomRightRadius: wp(0),
    borderBottomLeftRadius: wp(20),
  },
  menu: {
    backgroundColor: COLORS.brownMenu,
    borderRadius: wp(100),
  },
});
