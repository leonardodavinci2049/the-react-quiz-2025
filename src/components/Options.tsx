import { QuestionType } from "../types/typeQuestions";


interface OptionsProps {
  question: QuestionType;
  dispatch: React.Dispatch<{ type: string; payload: number }>;
  answer: number | null;
}

const Options  = ({ question, dispatch, answer }:OptionsProps) => {
  const hasAnswered = answer !== null;

  return (
    <div className="flex flex-col mb-12 gap-4">
      <p className="text-2xl font-bold mb-4">Choose an option:</p>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? " translate-x-8" : ""} ${
            hasAnswered
              ? index === question.correctOption
                  ? "bg-theme border-2 border-theme text-light"
                  : "bg-accent border-2 border-accent text-darkest"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options