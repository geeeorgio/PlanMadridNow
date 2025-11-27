export type PlaceType = {
  id: string;
  number: number;
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
  number: number;
  question: string;
  options: string[];
};
