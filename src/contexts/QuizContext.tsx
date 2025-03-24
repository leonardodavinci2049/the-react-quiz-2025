import { createContext } from "react";
import { initialStateContext } from "./initialStateQuiz";
import { QuizContextType } from "./QuizContextType";

const QuizContext = createContext<QuizContextType>(initialStateContext);
export { QuizContext };
