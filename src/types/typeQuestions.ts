export interface QuestionType {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: string;
}

export type QuestionsType = QuestionType[];
