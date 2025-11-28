import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: hp(44),
    left: wp(35),
    right: wp(35),
    zIndex: 1000,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(4),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
