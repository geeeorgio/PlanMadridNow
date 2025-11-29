import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    height: hp(120),
    borderBottomLeftRadius: wp(12),
    borderBottomRightRadius: wp(12),
    backgroundColor: COLORS.bgDark,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: wp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(16),
  },
  backButton: {
    width: wp(44),
    height: wp(44),
  },
  backButtonIcon: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: sp(20),
  },
  emptyView: {
    width: wp(44),
    height: wp(44),
  },
});
