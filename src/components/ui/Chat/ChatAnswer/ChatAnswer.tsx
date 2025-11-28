import React from 'react';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

interface ChatAnswerProps {
  answer: string;
}

const ChatAnswer = ({ answer }: ChatAnswerProps) => {
  return (
    <CustomContainer variant="golden" extraStyle={styles.chatAnswerContainer}>
      <CustomText extraStyle={styles.chatAnswerText}>{answer}</CustomText>
    </CustomContainer>
  );
};

export default ChatAnswer;
