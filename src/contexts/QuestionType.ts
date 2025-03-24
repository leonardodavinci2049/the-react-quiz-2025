export type QuestionType = {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export type QuizData = QuestionType[];