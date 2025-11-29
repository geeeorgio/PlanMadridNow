import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  contentContainer: {
    gap: hp(16),
  },
  columnWrapper: {
    gap: wp(8),
  },
  headerContainer: {
    height: hp(40),
  },
  footerContainer: {
    height: hp(40),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(22),
    borderRadius: wp(20),
  },
  text: {
    fontSize: sp(11),
    textAlign: 'center',
  },
  selectedText: {
    fontSize: sp(11),
    textAlign: 'center',
    color: COLORS.darkBrown,
  },
});
