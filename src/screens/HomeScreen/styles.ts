import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: hp(100),
  },
  content: {
    flex: 0.4,
    justifyContent: 'center',
    gap: hp(22),
    alignItems: 'center',
  },
  title: {
    fontSize: sp(16),
    fontFamily: FONTS.InterRegular,
    textAlign: 'center',
  },
  button: {
    width: '66%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(18),
  },
  buttonText: {
    fontSize: sp(20),
  },
  guideImgWrapper: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    height: '66%',
  },
  guideImg: {
    width: '100%',
    height: '100%',
  },
});
