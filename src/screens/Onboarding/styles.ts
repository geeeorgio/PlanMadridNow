import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  plainContainer: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
    paddingHorizontal: wp(33),
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    flex: 1,
    width: '100%',
    maxHeight: wp(222),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'relative',
    zIndex: 5,
    width: '77%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(18),
  },
  buttonText: {
    fontSize: sp(18),
    color: COLORS.darkBrown,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.bgOverlay,
    zIndex: 0,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: COLORS.bgOverlay,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(33),
  },
  title: {
    marginTop: hp(33),
    fontSize: sp(18),
    textAlign: 'center',
  },
  guideImageWrapper: {
    zIndex: 0,
    width: '100%',
    height: '70%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  guideImage: {
    width: '100%',
    height: '100%',
  },
});
