import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(100),
    paddingHorizontal: wp(20),
  },
  noPlacesContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(40),
  },
  noPlacesText: {
    textAlign: 'center',
    fontSize: sp(20),
    color: COLORS.darkBrown,
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatListContent: {
    gap: hp(16),
  },
  footerContainer: {
    height: hp(100),
  },
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
