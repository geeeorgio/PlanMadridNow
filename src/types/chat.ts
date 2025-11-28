export type ChatMessage = {
  id: string;
  type: 'question' | 'answer';
  text: string;
};
