import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  contentContainer: {
    gap: hp(10),
  },
  columnWrapper: {
    gap: wp(10),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: sp(11),
    textAlign: 'center',
  },
});
