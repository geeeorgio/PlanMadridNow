import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { sp } from 'src/utils';

export const styles = StyleSheet.create({
  chatAnswerContainer: {
    alignSelf: 'flex-end',
    maxWidth: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatAnswerText: {
    fontSize: sp(11),
    color: COLORS.darkBrown,
    textAlign: 'center',
  },
});
