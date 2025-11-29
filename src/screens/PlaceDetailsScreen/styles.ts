import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(16),
    paddingTop: hp(16),
    gap: hp(14),
  },
  backBtn: {
    alignItems: 'flex-start',
  },
  mainScroll: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    gap: hp(16),
    paddingBottom: hp(10),
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 2,
    overflow: 'hidden',
    borderRadius: hp(10),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  shareBookmarkContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: hp(10),
  },
  shareButton: {
    flex: 0.85,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(16),
    paddingVertical: hp(12),
  },
  shareButtonText: {
    fontSize: sp(14),
    color: COLORS.darkBrown,
  },
  bookmarkButton: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(12),
  },
  descriptionContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  mapButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(33),
    paddingVertical: hp(12),
    marginBottom: hp(10),
  },
  mapButtonText: {
    fontSize: sp(16),
    color: COLORS.darkBrown,
  },
});
