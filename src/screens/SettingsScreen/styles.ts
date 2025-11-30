import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(100),
    paddingHorizontal: wp(20),
  },
  contentContainer: {
    width: '100%',
  },
  musicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  vibrationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  divider: {
    height: wp(1),
    backgroundColor: COLORS.darkBrown,
    marginBottom: hp(22),
  },
  text: {
    fontSize: sp(20),
    fontFamily: FONTS.InterMedium,
    color: COLORS.darkBrown,
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(18),
  },
  buttonText: {
    fontSize: sp(14),
    color: COLORS.darkBrown,
  },
  switch: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
});
