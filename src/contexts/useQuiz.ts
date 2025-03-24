import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import { QuizContextType } from "./QuizContextType";

const useQuiz= (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}
export default useQuiz