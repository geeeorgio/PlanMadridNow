export type PlaceType = {
  id: string;
  number: number;
  shortTitle: string;
  title: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  description: string;
  facts: string[];
  image?: number;
};

export type PlaceQuestion = {
  id: string;
  question: string;
  options: { number: number; text: string }[];
};
