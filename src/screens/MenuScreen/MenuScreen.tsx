import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
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
import { PLACES } from 'src/constants';
import type {
  ChatMessage,
  MainStackNavigationProp,
  PlaceType,
} from 'src/types';
import { hp, wp } from 'src/utils';
import {
  getTenRandomQuestions,
  findSuggestedPlace,
} from 'src/utils/chatHelper';

const MenuScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const flatListRef = useRef<any>(null);

  const [questions] = useState(() => getTenRandomQuestions());

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: `intro`,
      type: 'question',
      text: `Hi! \n Ready to answer a few questions to help you choose a location?`,
    },
  ]);

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [showOptions, setShowOptions] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [tempSelectedOption, setTempSelectedOption] = useState<{
    number: number;
    text: string;
  } | null>(null);

  const [suggestedPlace, setSuggestedPlace] = useState<PlaceType | null>(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const addMessage = (type: 'question' | 'answer', text: string) => {
    const newMessage: ChatMessage = {
      id: `${type}-${Date.now()}`,
      type,
      text,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleStartPress = () => {
    setIsGameStarted(true);
    addMessage('answer', 'Start');

    setTimeout(() => {
      askQuestion(0);
    }, 777);
  };

  const askQuestion = (index: number) => {
    if (index >= questions.length) {
      finishGame();
      return;
    }
    const question = questions[index];
    addMessage('question', question.question);
  };

  const handleLetMeAnswerPress = () => {
    setShowOptions(true);
  };

  const handleOptionSelect = (option: { number: number; text: string }) => {
    setTempSelectedOption(option);
  };

  const handleConfirmAnswer = () => {
    if (!tempSelectedOption) return;

    setShowOptions(false);
    const selected = tempSelectedOption;
    setTempSelectedOption(null);

    addMessage('answer', selected.text);

    const newAnswers = [...userAnswers, selected.number];
    setUserAnswers(newAnswers);

    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);

    if (nextIndex >= questions.length) {
      finishGame(newAnswers);
    } else {
      setTimeout(() => {
        askQuestion(nextIndex);
      }, 777);
    }
  };

  const finishGame = (finalAnswers?: number[]) => {
    const answersToProcess = finalAnswers || userAnswers;
    const result = findSuggestedPlace(answersToProcess, PLACES);
    setSuggestedPlace(result || null);

    if (result) {
      setTimeout(() => {
        addMessage(
          'question',
          `${result.shortTitle}, the place that suits you!`,
        );
      }, 777);
    }
  };

  const handleShowResult = () => {
    if (suggestedPlace) {
      navigation.navigate('PlaceDetailsScreen', {
        place: suggestedPlace,
        fromSreen: 'MenuScreen',
      });
    }
  };

  const currentOptionsData = questions[currentQuestionIndex]?.options || [];

  let mainButton = null;

  if (!isGameStarted) {
    mainButton = (
      <CustomButton
        variant="golden"
        onPress={handleStartPress}
        extraStyle={styles.chatMenuButton}
      >
        <CustomText extraStyle={styles.chatMenuButtonText}>Start</CustomText>
      </CustomButton>
    );
  } else if (suggestedPlace) {
    mainButton = (
      <CustomButton
        variant="golden"
        onPress={handleShowResult}
        extraStyle={styles.chatMenuButton}
      >
        <CustomText extraStyle={styles.chatMenuButtonText}>Show me</CustomText>
      </CustomButton>
    );
  } else if (showOptions) {
    mainButton = (
      <CustomButton
        variant="golden"
        onPress={handleConfirmAnswer}
        extraStyle={styles.chatMenuButton}
        disabled={!tempSelectedOption}
      >
        <CustomText extraStyle={styles.chatMenuButtonText}>Answer</CustomText>
      </CustomButton>
    );
  } else {
    mainButton = (
      <CustomButton
        variant="golden"
        onPress={handleLetMeAnswerPress}
        extraStyle={styles.chatMenuButton}
      >
        <CustomText extraStyle={styles.chatMenuButtonText}>
          Let me answer.
        </CustomText>
      </CustomButton>
    );
  }

  return (
    <CustomScreenWrapper
      extraStyle={styles.container}
      edges={['bottom', 'left', 'right']}
    >
      <Pressable
        style={styles.backBtn}
        onPress={handleBackPress}
        hitSlop={wp(10)}
      >
        <BackArrow width={wp(33)} height={hp(33)} />
      </Pressable>

      <View style={styles.chatMenu}>
        {showOptions ? (
          <ChatOptions
            options={currentOptionsData}
            selectedOptionNumber={tempSelectedOption?.number || null}
            onOptionPress={handleOptionSelect}
          />
        ) : (
          <ChatList messages={messages} flatListRef={flatListRef} />
        )}
      </View>

      {mainButton}
    </CustomScreenWrapper>
  );
};

export default MenuScreen;
