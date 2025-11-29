import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
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
});
