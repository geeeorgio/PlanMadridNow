import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(20),
    paddingVertical: hp(20),
    gap: hp(16),
    justifyContent: 'space-between',
  },
  backBtn: {
    alignItems: 'flex-start',
  },
  chatMenu: {
    flex: 1,
    width: '100%',
  },
  chatMenuButton: {
    alignSelf: 'center',
    width: '60%',
    maxWidth: wp(222),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(10),
  },
  chatMenuButtonText: {
    fontSize: sp(20),
    color: COLORS.darkBrown,
  },
});
