import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: hp(60),
    left: wp(36),
    right: wp(36),
    zIndex: 1000,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(2),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
