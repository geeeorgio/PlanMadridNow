import React from 'react';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

interface ChatQuestionProps {
  question: string;
}

const ChatQuestion = ({ question }: ChatQuestionProps) => {
  return (
    <CustomContainer variant="brown" extraStyle={styles.chatMenuContainer}>
      <CustomText extraStyle={styles.chatMenuTitle}>{question}</CustomText>
    </CustomContainer>
  );
};

export default ChatQuestion;
