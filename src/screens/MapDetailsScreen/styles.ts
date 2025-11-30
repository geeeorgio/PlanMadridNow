import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(20),
    gap: hp(16),
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: wp(22),
    gap: hp(16),
  },
  backBtn: {
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 2,
    overflow: 'hidden',
    borderRadius: wp(10),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  coordinatesContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coordinatesText: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },
  mapWrapper: {
    flex: 1,
  },
});
