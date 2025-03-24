import { QuizContextType } from "./QuizContextType";

const initialStateContext: QuizContextType = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  numQuestions: 0,
  maxPossiblePoints: 0,
  dispatch: () => {},

};

export { initialStateContext };