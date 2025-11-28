import { QUESTIONS } from 'src/constants';
import type { PlaceType } from 'src/types';

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const getTenRandomQuestions = () => {
  const questions = shuffleArray([...QUESTIONS]);
  return questions.slice(0, 10);
};

export const findSuggestedPlace = (
  indexArray: number[],
  places: PlaceType[],
) => {
  const counter = indexArray.reduce((acc: Record<number, number>, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;

    return acc;
  }, {});

  const mostFrequentNumberStr = Object.keys(counter).reduce((a, b) =>
    counter[Number(a)] > counter[Number(b)] ? a : b,
  );

  const placeNumber = Number(mostFrequentNumberStr);

  return places.find((place) => place.number === placeNumber);
};
