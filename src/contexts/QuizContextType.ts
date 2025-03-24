import { QuestionType } from "./QuestionType";

type QuizAction =
  | { type: "dataReceived"; payload: QuestionType[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: string }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" };


type QuizContextType = {
  questions: QuestionType[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: string | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;  
  numQuestions: number;
  maxPossiblePoints: number;
  dispatch: React.Dispatch<QuizAction>; // Use QuizAction aqui
};

export type { QuizContextType };
