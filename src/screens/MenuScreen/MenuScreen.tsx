import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './styles';

import {
  BackArrow,
  ChatList,
  ChatOptions,
  CustomButton,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import type {
  ChatMessage,
  MainStackNavigationProp,
  PlaceQuestion,
  PlaceType,
} from 'src/types';
import { hp, wp } from 'src/utils';
import { getTenRandomQuestions } from 'src/utils/chatHelper';

const MenuScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const flatListRef = useRef(null);

  const [questions, setQuestions] = useState(() => getTenRandomQuestions());
  console.log(questions);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: `q-${Date.now()}`,
      type: 'question',
      text: `Hi! \n Ready to answer a few questions to help you choose a location?`,
    },
  ]);

  const [chatStarted, setChatStarted] = useState(false);
  console.log('chatStarted', chatStarted);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log('currentQuestionIndex', currentQuestionIndex);
  const [currentQuestion, setCurrentQuestion] = useState<PlaceQuestion | null>(
    null,
  );
  console.log('currentQuestion', currentQuestion);
  const [showOptions, setShowOptions] = useState(false);
  console.log('showOptions', showOptions);
  const [currentOptions, setCurrentOptions] = useState<
    { number: number; text: string }[]
  >([]);
  console.log('currentOptions', currentOptions);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [suggestedPlace, setSuggestedPlace] = useState<PlaceType | null>(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleStartPress = () => {
    setChatStarted(true);
    setCurrentQuestion(questions[currentQuestionIndex]);
    setCurrentOptions(questions[currentQuestionIndex].options);

    setMessages((prev) => [
      ...prev,
      {
        id: `a-${Date.now()}`,
        type: 'answer',
        text: `Start`,
      },
    ]);
  };
  console.log('messages', messages);

  const handleQuestionPress = () => {
    if (currentOptions.length > 0) {
      setShowOptions(true);
    }

    if (selectedOptions.length > 0) {
      setShowOptions(false);

      if (currentQuestionIndex <= questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestion(questions[currentQuestionIndex]);
        setCurrentOptions(questions[currentQuestionIndex].options);
      }
    }

    if (suggestedPlace) {
      navigation.navigate('PlaceDetailsScreen', {
        place: suggestedPlace,
        fromSreen: 'MenuScreen',
      });
    }
  };

  const handleOptionPress = (option: { number: number; text: string }) => {
    console.log('option', option);
    setSelectedOptions((prev) => [...prev, option.number]);
  };

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (currentQuestion) {
      timeOut = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `q-${Date.now()}`,
            type: 'question',
            text: currentQuestion.question,
          },
        ]);
      }, 1000);

      return () => clearTimeout(timeOut);
    }
  }, [currentQuestion]);

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <Pressable
        style={styles.backBtn}
        onPress={handleBackPress}
        hitSlop={wp(10)}
      >
        <BackArrow width={wp(29)} height={hp(25)} />
      </Pressable>

      <View style={styles.chatMenu}>
        {showOptions ? (
          <ChatOptions
            options={currentOptions}
            onOptionPress={handleOptionPress}
          />
        ) : (
          <ChatList messages={messages} flatListRef={flatListRef} />
        )}
      </View>

      {chatStarted ? (
        <CustomButton
          variant="golden"
          onPress={handleQuestionPress}
          extraStyle={styles.chatMenuButton}
        >
          <CustomText extraStyle={styles.chatMenuButtonText}>
            {showOptions ? 'Answer' : 'Let me answer.'}
            {suggestedPlace && 'Show me'}
          </CustomText>
        </CustomButton>
      ) : (
        <CustomButton
          variant="golden"
          onPress={handleStartPress}
          extraStyle={styles.chatMenuButton}
        >
          <CustomText extraStyle={styles.chatMenuButtonText}>Start</CustomText>
        </CustomButton>
      )}
    </CustomScreenWrapper>
  );
};

export default MenuScreen;
