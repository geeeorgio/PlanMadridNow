import { StyleSheet } from 'react-native';

import { sp } from 'src/utils';

export const styles = StyleSheet.create({
  chatMenuContainer: {
    alignSelf: 'flex-start',
    maxWidth: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatMenuTitle: {
    fontSize: sp(11),
    textAlign: 'center',
  },
});
