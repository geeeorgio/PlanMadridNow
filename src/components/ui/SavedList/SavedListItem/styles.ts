import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  placeContainer: {
    width: '100%',
    minHeight: hp(96),
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp(8),
    alignItems: 'center',
    padding: wp(10),
  },
  imgeContainer: {
    flex: 0.5,
    aspectRatio: 2,
    overflow: 'hidden',
    borderRadius: wp(10),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    flex: 0.5,
    textAlign: 'center',
    fontSize: sp(11),
  },
});
